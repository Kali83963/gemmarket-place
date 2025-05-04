import { Router } from "express";
import {
  addItem,
  clearCart,
  createCart,
  getCart,
  removeItem,
} from "../controller/cart.controller";
import { CartWebRouter } from "./web/route";

const router = Router();
router.use("/web", CartWebRouter);

export { router as cartRouter };
