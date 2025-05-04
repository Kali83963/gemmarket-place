import { Request, Response } from "express";
import { asyncHandler } from "@/utils/utils";
import { successResponse } from "@/utils/response";
import { OrderService } from "../services/order.service";

const orderService = new OrderService();

export const placeOrder = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user;
  const order = await orderService.createOrder(user.id, req.body);
  successResponse(res, order, "Order placed successfully", 201);
});

export const getOrderByUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    const order = await orderService.getOrderByUser(id);
    successResponse(res, order, "Order fetched", 200);
  }
);
export const getOrder = asyncHandler(async (req: Request, res: Response) => {
  const order = await orderService.getOrder(req.params.orderId);
  successResponse(res, order, "Order fetched", 200);
});

export const listOrders = asyncHandler(async (_req: Request, res: Response) => {
  const orders = await orderService.getAllOrders();
  successResponse(res, orders, "Orders listed", 200);
});

export const getAnalytics = asyncHandler(
  async (_req: Request, res: Response) => {
    const data = await orderService.getAnalytics();
    successResponse(res, data, "Analytics fetched", 200);
  }
);
