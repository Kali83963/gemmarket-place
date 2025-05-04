import { AnalyticsRouter } from "@/apps/analytics/routes/routes";
import { authRoutes } from "@/apps/auth/routes/auth.routes";
import { cartRouter } from "@/apps/cart/routes/route";
import { endoserRoutes } from "@/apps/endoser/routes/endoser.route";
import { gemstoneRoutes } from "@/apps/gemstone/routes/gemstone.routes";
import { notificationRoutes } from "@/apps/notification/routes/notification.routes";
import { OrderRouter } from "@/apps/order/routes/order.route";
import { userRoutes } from "@/apps/user/routes/user.routes";
import { Router } from "express";

const router = Router();

// Version 1 API
router.use("/v1", authRoutes); // All authentication-related routes
router.use("/v1/", userRoutes);
router.use("/v1/", endoserRoutes);
router.use("/v1/", gemstoneRoutes);
router.use("/v1/", cartRouter);
router.use("/v1/", OrderRouter);
router.use("/v1/", AnalyticsRouter);
router.use("/v1/notification", notificationRoutes);

export { router as v1Route };
