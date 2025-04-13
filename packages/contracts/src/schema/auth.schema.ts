import { z } from "zod";

export const RegisterUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  role: z.enum(["BUYER", "SELLER", "ADMIN", "ENDORSER"]), // Use z.enum for Role
  password: z.string().min(6),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
