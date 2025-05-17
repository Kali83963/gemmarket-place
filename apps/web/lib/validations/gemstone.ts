// src/lib/validations/gemstone.ts
import * as z from "zod";

// Define the schema for gemstone form data
export const gemstoneSchema = z.object({
  // Basic details
  title: z.string(),
  gemstoneType: z.string().min(1, "Gemstone type is required"),
  shape: z.string().min(1, "Shape is required"),
  description: z.string(),
  origin: z.string().optional(),
  treatment: z.string().optional(),

  // Specifications
  carat: z.number().positive("Carat weight must be positive"),
  dimensions: z.string().optional(),
  certification: z.string().min(1, "Certification is required"),
  color: z.string().optional(),
  clarity: z.string().optional(),
  cut: z.string().optional(),
  polish: z.string().optional(),
  symmetry: z.string().optional(),
  fluorescence: z.string().optional(),
  colorHue: z.string().optional(),
  transparency: z.string().optional(),
  colorSaturation: z.string().optional(),
  additional_specification: z.string(),

  // Media
  images: z.array(z.string()).min(1, "At least one image is required"),
  certificates: z.array(z.string()).optional(),

  // Pricing & Inventory
  price: z.number().positive("Price must be positive"),
  comparePrice: z.number().optional(),
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  sku: z.string().optional(),
  allowOffers: z.boolean().default(false),
  showComparePriceLabel: z.boolean().default(false),
  chargeShipping: z.boolean().default(true),
  listingStatus: z.string().default("active"),
  featured: z.boolean(),
});

// Export type for the form data
export type GemstoneFormData = z.infer<typeof gemstoneSchema>;
