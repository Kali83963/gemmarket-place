import { Router } from "express";
import { isAuthenticate } from "@/middleware/authMiddleware";
import {
  LoginSchema,
  RegisterUserSchema,
  validate,
} from "@gemmarket/contracts";
import { dashboardlogin } from "../../controllers/auth.controller";

const router = Router();

router.post("/login", validate(LoginSchema), dashboardlogin);

export { router as authDashboardRoutes };
