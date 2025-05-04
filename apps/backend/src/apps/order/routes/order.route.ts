import { Router } from "express";
import {
  placeOrder,
  getOrder,
  listOrders,
  getAnalytics,
} from "../controller/order.controller";
import { OrderWebRouter } from "./web/route";
import { OrdeDashboardRouter } from "./dashboard/route";

const router = Router();

router.use("/web", OrderWebRouter);
router.use("/dashboard", OrdeDashboardRouter);

router.get("/orders", listOrders);
router.get("/orders/analytics", getAnalytics);

export { router as OrderRouter };
