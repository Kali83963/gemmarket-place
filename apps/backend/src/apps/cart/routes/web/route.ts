import { Router } from "express";
import {
  addItem,
  clearCart,
  createCart,
  getCart,
  removeItem,
} from "../../controller/cart.controller";
import { isAuthenticate } from "@/middleware/authMiddleware";

const router = Router();
router.get("/cart/", isAuthenticate, getCart);
router.post("/cart/add", isAuthenticate, addItem);
// router.post("/cart/update", isAuthenticate, addItem);
router.delete("/cart/remove/:itemId", isAuthenticate, removeItem);
router.delete("/cart/clear", isAuthenticate, clearCart);

export { router as CartWebRouter };
