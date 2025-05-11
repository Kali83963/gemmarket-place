import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import { asyncHandler } from "@/utils/utils";
import { errorResponse, successResponse } from "@/utils/response";

const authService: AuthService = new AuthService();

export const register = asyncHandler(async (req: Request, res: Response) => {
  const { token, user } = await authService.register(req.body);
  res.cookie("token", token, {
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only on HTTPS in prod
    sameSite: "strict",
    maxAge: 160 * 160 * 10000, // 1 hour
  });

  successResponse(res, { user: user }, "Login successful", 201);
});

export const weblogin = asyncHandler(async (req: Request, res: Response) => {
  const { token, user } = await authService.weblogin(req.body);
  res.cookie("token", token, {
    // httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only on HTTPS in prod
    sameSite: "strict",
    maxAge: 160 * 160 * 10000, // 1 hour
  });
  console.log(user);
  successResponse(res, { user: user }, "Login successful");
});

export const dashboardlogin = asyncHandler(
  async (req: Request, res: Response) => {
    const { token, user } = await authService.dashboardlogin(req.body);
    res.cookie("token", token, {
      // httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only on HTTPS in prod
      sameSite: "strict",
      maxAge: 60 * 60 * 100000, // 1 hour
    });
    console.log(user);
    successResponse(res, user, "Login successful");
  }
);

export const logout = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const token = req.cookies.token;

    if (!token) {
      errorResponse(res, "Token missing", 400);
      return;
    }
    await authService.logout(token);
    res.clearCookie("token");
    successResponse(res, null, "Logged out successfully", 200);
  }
);
