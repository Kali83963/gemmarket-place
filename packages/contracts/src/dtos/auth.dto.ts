import { z } from "zod";
import { LoginSchema, RegisterUserSchema } from "../schema/auth.schema";

export type RegisterUserDTO = z.infer<typeof RegisterUserSchema>;
export type LoginDTO = z.infer<typeof LoginSchema>;
