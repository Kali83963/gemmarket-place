import { Router } from "express";
import { isAuthenticate } from "@/middleware/authMiddleware";
import {
  getAnalytics,
  getDashboardStats,
} from "../../controllers/analytics.controller";

const router = Router();

router.get("/analytics", isAuthenticate, getDashboardStats);
router.get("/charts", isAuthenticate, getAnalytics);

export { router as AnalyticsDashboardRouter };
