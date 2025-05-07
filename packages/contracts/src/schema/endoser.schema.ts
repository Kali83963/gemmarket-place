import { z } from "zod";
import { CreateUserSchema } from "./user.schema";

export const GemstoneVerifierSchema = z.object({
  user: CreateUserSchema,

  phoneNumber: z.string().min(10).max(15), // Add custom regex if needed
  certificationNumber: z.string(),
  certifyingAuthority: z.string(),
  certificationType: z.string(),
  certificationExpiryDate: z.date().nullable().optional(),

  yearsOfExperience: z.number().int().nonnegative().optional(),
  specializations: z.array(z.string()),
  professionalMemberships: z.array(z.string()),
  verificationMethods: z.array(z.string()),
  verificationEquipment: z.array(z.string()),

  endorserBio: z.string().optional(),
});
