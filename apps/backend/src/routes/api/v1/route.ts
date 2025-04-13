import { authRoutes } from "@/apps/auth/routes/auth.routes";
import { Router } from "express";

const router = Router();

// Version 1 API
router.use("/v1", authRoutes); // All authentication-related routes

export { router as v1Route };
