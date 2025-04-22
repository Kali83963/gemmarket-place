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
  price: z.number().positive(),
  origin: z.string().min(1),
  certificationStatus: z.boolean(),
  sellerId: z.number().int().positive(),
});

export type CreateGemstoneDto = z.infer<typeof gemstoneSchema>;
export const updateGemstoneSchema = gemstoneSchema.partial();

export type UpdateGemstoneDto = z.infer<typeof updateGemstoneSchema>;

export class GemstoneService {
  async addGemstone(data: GemstoneDTO) {
    // Validate the input data using Zod schema
    const validatedData = gemstoneSchema.parse(data);

    // Type assertion to ensure the validated data matches Prisma's GemstoneCreateInput
    return await prisma.gemstone.create({
      data: validatedData as any, // Ensure that the data matches Prisma's input type
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
      where: { id },
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
    return await prisma.gemstone.findMany();
  }
}
