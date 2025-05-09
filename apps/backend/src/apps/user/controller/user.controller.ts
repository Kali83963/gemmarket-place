import { Request, Response, NextFunction } from "express";
import { errorResponse, successResponse } from "@/utils/response";
import { asyncHandler } from "@/utils/utils";
import { UserService } from "../services/user.service";

const userService = new UserService();

export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await userService.create(req.body);

  successResponse(res, user, "User created successfully", 201);
});

export const getUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);

  successResponse(res, user, "User fetched successfully", 200);
});

export const editUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.editUser(id, req.body);

  successResponse(res, user, "User updated successfully", 200);
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await userService.deleteUser(id);

  successResponse(res, {}, "User deleted successfully", 204);
});

export const searchUser = asyncHandler(async (req: Request, res: Response) => {
  const { query } = req.query;
  const users = await userService.searchUsers(query as string);

  successResponse(res, users, "User search completed successfully", 200);
});

export const getUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    const user = await userService.getUserById(id);
    if (!user) {
      return errorResponse(res, "User not found", 404);
    }

    successResponse(res, user, "User profile fetched successfully", 200);
  }
);

export const updateUserProfile = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.user;
    console.log("id", id);
    console.log("user", req.user);
    const user = await userService.editUser(id, req.body);
    if (!user) {
      return errorResponse(res, "User not found", 404);
    }

    successResponse(res, user, "User profile updated successfully", 200);
  }
);
