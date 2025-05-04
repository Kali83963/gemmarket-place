import { Router } from "express";
import {
  getOrder,
  getOrderByUser,
  placeOrder,
} from "../../controller/order.controller";
import { isAuthenticate } from "@/middleware/authMiddleware";

const router = Router();

router.post("/order", isAuthenticate, placeOrder);
router.get("/order", isAuthenticate, getOrderByUser);
router.get("/order/:orderId", isAuthenticate, getOrder);

export { router as OrderWebRouter };
