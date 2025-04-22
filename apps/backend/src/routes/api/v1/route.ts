import { authRoutes } from "@/apps/auth/routes/auth.routes";
import { gemstoneRoutes } from "@/apps/gemstone/routes/gemstone.routes";
import { notificationRoutes } from "@/apps/notification/routes/notification.routes";
import { Router } from "express";

const router = Router();

// Version 1 API
router.use("/v1", authRoutes); // All authentication-related routes
router.use("/v1/gemstones", gemstoneRoutes);
router.use("/v1/notification",notificationRoutes);

export { router as v1Route };
