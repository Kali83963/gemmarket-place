import { Router } from "express";
import {
  addItem,
  clearCart,
  createCart,
  getCart,
  removeItem,
} from "../controller/cart.controller";

const router = Router();
router.get("/cart/:userId", getCart);
router.post("/cart/:userId/add", createCart);
router.post("/cart/:userId/update", addItem);
router.delete("/cart/:userId/remove/:productId", removeItem);
router.delete("/cart/:userId/clear", clearCart);
