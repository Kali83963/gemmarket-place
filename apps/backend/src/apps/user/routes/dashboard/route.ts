import { Router } from "express";
import {
  createUser,
  deleteUser,
  editUser,
  getUser,
  getUserProfile,
  searchUser,
  updateUserProfile,
} from "../../controller/user.controller";
import { authorize, isAuthenticate } from "@/middleware/authMiddleware";

const router = Router();

router.post(
  "/users",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  createUser
);

router.get("/user/profile", isAuthenticate, getUserProfile);

router.put("/users/profile", isAuthenticate, updateUserProfile);
router.get(
  "/users/",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  searchUser
);
router.get(
  "/users/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  getUser
);

router.put(
  "/users/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  editUser
);

router.delete(
  "/users/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  deleteUser
);

export { router as userDashboardRoutes };
