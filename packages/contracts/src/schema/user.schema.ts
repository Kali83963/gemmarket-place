import { z } from "zod";

export const CreateUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  role: z.enum(["BUYER", "SELLER", "ADMIN", "ENDORSER"]), // Use z.enum for Role
  password: z.string().min(6),
  isActive: z.boolean().default(true),
});

export const EditUserSchema = CreateUserSchema.partial();
