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
import { userWebRoutes } from "./web/route";

const router = Router();

// router.use("/web", userWebRoutes);
router.use("/dashboard", userDashboardRoutes);

router.get("/web/users/profile", isAuthenticate, getUserProfile);

router.put("/web/users/profile", isAuthenticate, updateUserProfile);

export { router as userRoutes };
