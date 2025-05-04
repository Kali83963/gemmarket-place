import { Request, Response } from "express";
import { asyncHandler } from "@/utils/utils";
import { successResponse } from "@/utils/response";
import { AnalyticsService } from "../services/analytics.service";

const analyticsService = new AnalyticsService();

export const getDashboardStats = asyncHandler(
  async (req: Request, res: Response) => {
    const stats = await analyticsService.getDashboardStats();
    successResponse(
      res,
      stats,
      "Dashboard statistics fetched successfully",
      200
    );
  }
);
export const getAnalytics = asyncHandler(
  async (req: Request, res: Response) => {
    const { range = "month" } = req.query;
    const data = await analyticsService.fetchAnalyticsData(range as string);
    successResponse(
      res,
      data,
      "Dashboard statistics fetched successfully",
      200
    );
  }
);
