// App/Gemstone/Services/GemstoneService.ts
import { z } from "zod";
import prisma from "@/config/prisma";
import {
  CERTIFICATE_STATUS,
  GEMSTONE_STATUS,
  Role,
  User,
} from "@prisma/client";
import { BlockChainService } from "../../blockchain/blockchain.service";
import fs from "fs";
import axios from "axios";
import crypto from "crypto";

// DTOs and Interfaces
export interface GemstoneDTO {
  name: string;
  type: string;
  price: number;
  origin: string;
  sellerId: number;
}

export const gemstoneSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  shape: z.string().min(1),
  // signerAddress: z.string(),
  description: z.string().min(1),
  treatment: z.string().min(1),
  weight: z.number().positive(),
  dimension: z.string().min(1),
  certification: z.string().min(1),
  color_grade: z.string().min(1),
  clarity_grade: z.string().min(1),
  cut_grade: z.string().min(1),
  polish: z.string().min(1),
  symmetry: z.string().min(1),
  fluorescence: z.string().min(1),
  color: z.string().min(1),
  transparency: z.string().min(1),
  color_saturation: z.string().min(1),
  additional_specification: z.string().min(1),
  price: z.number().positive(),
  compareAtPrice: z.number().positive().optional(), // optional
  origin: z.string().min(1),
  certification_document: z.string().min(1),
  sellerId: z.number().int().positive(),

  quantity: z.number().int().positive(),
  sku: z.string().min(1),

  allowOffers: z.boolean().optional().default(false),
  showOnSaleLabel: z.boolean().optional().default(false),
  chargeForShipping: z.boolean().optional().default(false),
  isFeatured: z.boolean().optional().default(false),

  // Images field with a max limit of 5 images
  images: z.array(z.string().url()).max(5).optional(), // Each string should be a valid URL, and no more than 5 images
});

export type CreateGemstoneDto = z.infer<typeof gemstoneSchema>;
export const updateGemstoneSchema = gemstoneSchema.partial();

export type UpdateGemstoneDto = z.infer<typeof updateGemstoneSchema>;

const blockChainService = new BlockChainService();
async function downloadFile(url: string): Promise<Buffer> {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  return Buffer.from(response.data);
}
export class GemstoneService {
  async addGemstone(data: CreateGemstoneDto, user: any) {
    // Validate the input data using Zod schema
    const validatedData = gemstoneSchema.parse(data);
    // const { signerAddress, ...restValidatedData } = data;

    const prismaData = {
      ...validatedData,
      user: {
        connect: { id: user.id },
      },
      images: {
        create: validatedData.images.map((url) => ({ url })),
      },
    };

    const gemstone = await prisma.gemstone.create({
      data: prismaData as any, // Ensure that the data matches Prisma's input type,
      include: {
        user: true,
      },
    });

    await prisma.user.update({
      where: {
        id: gemstone.user.id,
      },
      data: {
        role: Role.SELLER,
      },
    });

    // const blockchainHash = await blockChainService.generateGemstoneHash(
    //   gemstone,
    //   gemstone.certification_document
    // );
    const onChainHash = await this.generateHash(
      gemstone,
      gemstone.certification_document
    );

    // const { id, onChainHash } = await blockChainService.registerGemstoneOnChain(
    //   "signerAddress",
    //   blockchainHash
    // );

    await prisma.gemstone.update({
      where: {
        id: gemstone.id,
      },
      data: {
        blockchainHash: onChainHash,
      }, // Ensure that the data matches Prisma's input type,
    });

    // Type assertion to ensure the validated data matches Prisma's GemstoneCreateInput
    return gemstone;
  }

  async updateGemstoneBlockChainId(id: number, data: any) {
    const { blockChainId } = data;
    const gemstone = await prisma.gemstone.update({
      where: {
        id: id,
      },
      data: {
        blockchainGemstoneId: blockChainId,
        status: GEMSTONE_STATUS.AVAILABLE,
      },
    });
  }

  async verifyGemstone(id: number, data: any, user: any) {
    const { status } = data;
    const { id: userId } = user;

    const gemstone = await prisma.gemstone.update({
      where: {
        id,
      },
      data: {
        certificationStatus: status,
        verifiedById: userId,
      },
      include: {
        user: true,
        verifiedBy: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });

    return gemstone;
  }
  async editGemstone(id: number, data: Partial<GemstoneDTO>) {
    const validatedData = gemstoneSchema.parse(data);
    const prismaData = {
      ...validatedData,
      images: {
        deleteMany: {}, // Remove all existing images
        create: validatedData.images.map((url) => ({ url })),
      },
    };
    return await prisma.gemstone.update({
      where: { id },
      data: prismaData,
    });
  }

  async updateGemstoneStatus(
    id: number,
    data: {
      isActive?: boolean;
      status?: GEMSTONE_STATUS;
    }
  ) {
    return await prisma.gemstone.update({
      where: { id },
      data: {
        ...data,
      },
    });
  }

  async generateGemstoneHash(
    id: number,
    data: {
      certification?: string;
    }
  ) {
    const gemstone = await prisma.gemstone.findUnique({
      where: { id },
    });

    const gemstoneHash = await this.generateHash(gemstone, data.certification);

    return gemstoneHash;
  }

  async deleteGemstone(id: number) {
    return await prisma.gemstone.delete({
      where: { id },
    });
  }

  async getGemstone(id: number) {
    return await prisma.gemstone.findUnique({
      where: { id, isActive: true },
      include: {
        user: true,
        verifiedBy: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }
  async getGemstoneAdmin(id: number) {
    console.log(id);
    return await prisma.gemstone.findUnique({
      where: { id },
      include: {
        user: true,
        verifiedBy: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }

  async searchGemstones(params?: {
    type?: string;
    minPrice?: number;
    maxPrice?: number;
    origin?: string;
    certificationStatus?: boolean;
  }) {
    const { type, minPrice, maxPrice, origin, certificationStatus } =
      params || {};

    const where: any = {};

    if (type) where.type = type;

    if (minPrice !== undefined || maxPrice !== undefined) {
      where.price = {
        ...(minPrice !== undefined ? { gte: minPrice } : {}),
        ...(maxPrice !== undefined ? { lte: maxPrice } : {}),
      };
    }

    if (origin) where.origin = origin;

    if (certificationStatus !== undefined) {
      where.certificationStatus = certificationStatus;
    }

    return await prisma.gemstone.findMany({
      where,
      include: {
        user: true,
        verifiedBy: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }

  // New method to get all gemstones
  async getAllGemstones(params) {
    const { searchQuery, featured } = params;
    return await prisma.gemstone.findMany({
      where: {
        isActive: true,
        certificationStatus: CERTIFICATE_STATUS.ACCEPTED,
        status: GEMSTONE_STATUS.AVAILABLE,
        AND: [
          {
            name: {
              contains: searchQuery, // Case-insensitive search for name
              mode: "insensitive", // Case insensitive search
            },
          },
          {
            type: {
              contains: searchQuery, // Case-insensitive search for type
              mode: "insensitive", // Case insensitive search
            },
          },
          {
            isFeatured: featured ? true : false,
          },
        ],
      },
      include: {
        user: true,
        verifiedBy: true,
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }
  async generateHash(gemstone, certification) {
    let certBuffer: Buffer;

    if (certification.startsWith("http")) {
      certBuffer = await downloadFile(certification);
    } else {
      certBuffer = fs.readFileSync(certification); // Local path
    }
    const certHash = crypto
      .createHash("sha256")
      .update(certBuffer)
      .digest("hex");
    const data = `${gemstone.name}-${gemstone.type}-${gemstone.weight}-${certHash}`;
    return crypto.createHash("sha256").update(data).digest("hex");
  }
}
