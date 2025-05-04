import { Request, Response } from "express";
import { CartService } from "../services/cart.service";
import { asyncHandler } from "@/utils/utils";
import { successResponse } from "@/utils/response";

const cartService = new CartService();

export const createCart = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const cart = await cartService.createCart(userId);
  res.json(cart);
};

export const getCart = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const cart = await cartService.getCart(id);
  successResponse(res, cart, "Card successfully fetched", 200);
});

export const addItem = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const { itemData } = req.body;
  const item = await cartService.addItemToCart(id, itemData);
  successResponse(res, item, "Item sucessfully adde to cart");
});

export const removeItem = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.user;
  const { itemId } = req.params;
  await cartService.removeItemFromCart(id, itemId);
  successResponse(res, null, "Item removed successfully.", 204);
});

export const clearCart = asyncHandler(async (req: Request, res: Response) => {
  const { cartId } = req.params;
  await cartService.clearCart(cartId);
  successResponse(res, null, "Cart cleared successfully.", 204);
});
