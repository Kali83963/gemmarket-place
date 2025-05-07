import { z } from "zod";
import { GemstoneVerifierSchema } from "../schema";

export type CreateEndoserDTO = z.infer<typeof GemstoneVerifierSchema>;
export type EditEnodoserDTO = z.infer<typeof GemstoneVerifierSchema>;
