// App/Gemstone/Services/GemstoneService.ts
import { z } from "zod";
import prisma from "@/config/prisma";

// DTOs and Interfaces
export interface GemstoneDTO {
  name: string;
  type: string;
  price: number;
  origin: string;
  certificationStatus: boolean;
  sellerId: number;
}

export const gemstoneSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  shape: z.string().min(1),
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
  certificationStatus: z.boolean(),
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

export class GemstoneService {
  async addGemstone(data: GemstoneDTO) {
    // Validate the input data using Zod schema
    const validatedData = gemstoneSchema.parse(data);

    const prismaData = {
      ...validatedData,
      images: {
        create: validatedData.images.map((url) => ({ url })),
      },
    };

    // Type assertion to ensure the validated data matches Prisma's GemstoneCreateInput
    return await prisma.gemstone.create({
      data: prismaData as any, // Ensure that the data matches Prisma's input type
    });
  }

  async editGemstone(id: number, data: Partial<GemstoneDTO>) {
    return await prisma.gemstone.update({
      where: { id },
      data: data,
    });
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
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }

  async searchGemstones(
    type?: string,
    minPrice?: number,
    maxPrice?: number,
    origin?: string,
    certificationStatus?: boolean
  ) {
    const where: any = {};
    if (type) where.type = type;
    if (minPrice || maxPrice)
      where.price = {
        ...(minPrice ? { gte: minPrice } : {}),
        ...(maxPrice ? { lte: maxPrice } : {}),
      };
    if (origin) where.origin = origin;
    if (certificationStatus !== undefined)
      where.certificationStatus = certificationStatus;

    return await prisma.gemstone.findMany({
      where,
    });
  }

  // New method to get all gemstones
  async getAllGemstones() {
    return await prisma.gemstone.findMany({
      where: { isActive: true },
      include: {
        images: {
          select: {
            url: true,
          },
        },
      },
    });
  }
}
