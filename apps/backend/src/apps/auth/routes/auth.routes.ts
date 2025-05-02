import { Router } from "express";
import { logout, register, weblogin } from "../controllers/auth.controller";
import { isAuthenticate } from "@/middleware/authMiddleware";
import {
  LoginSchema,
  RegisterUserSchema,
  validate,
} from "@gemmarket/contracts";
import { authDashboardRoutes } from "./dashboard/route";
import { authWebRoutes } from "./web/route";

const router = Router();

router.use("/web", authWebRoutes);
router.use("/dashboard", authDashboardRoutes);
router.post("/logout", isAuthenticate, logout);

export { router as authRoutes };
