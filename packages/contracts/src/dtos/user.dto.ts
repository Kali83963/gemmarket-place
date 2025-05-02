import { z } from "zod";
import { CreateUserSchema, EditUserSchema } from "../schema/user.schema";

export type CreateUserDTO = z.infer<typeof CreateUserSchema>;
export type EditUserDTO = z.infer<typeof EditUserSchema>;
