import { Router } from "express";
import { login, logout, register } from "../controllers/auth.controller";
import { isAuthenticate } from "@/middleware/authMiddleware";
import {
  LoginSchema,
  RegisterUserSchema,
  validate,
} from "@gemmarket/contracts";

const router = Router();

router.post("/register", validate(RegisterUserSchema), register);
router.post("/login", validate(LoginSchema), login);
router.post("/logout", isAuthenticate, logout);

export { router as authRoutes };
