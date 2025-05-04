import { Router } from "express";
import {
  getAnalytics,
  getOrder,
  listOrders,
} from "../../controller/order.controller";
import { authorize, isAuthenticate } from "@/middleware/authMiddleware";

const router = Router();

router.get(
  "/orders",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  listOrders
);
router.get("/order/:orderId", isAuthenticate, getOrder);

router.get("/orders/analytics", getAnalytics);

export { router as OrdeDashboardRouter };
