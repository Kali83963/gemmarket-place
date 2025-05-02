import { Router } from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUserProfile,
  searchUser,
  updateUserProfile,
} from "../controller/user.controller";
import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import { userDashboardRoutes } from "./dashboard/route";

const router = Router();

router.use("/dashboard", userDashboardRoutes);

router.get("/users/profile", isAuthenticate, getUserProfile);

router.put("/users/profile", isAuthenticate, updateUserProfile);

export { router as userRoutes };
