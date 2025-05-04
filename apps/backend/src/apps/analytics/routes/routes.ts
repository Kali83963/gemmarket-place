import { Router } from "express";
import { isAuthenticate } from "@/middleware/authMiddleware";
import { AnalyticsDashboardRouter } from "./dashboard/routes";

const router = Router();

router.use("/dashboard", AnalyticsDashboardRouter);

export { router as AnalyticsRouter };
