import { Router } from "express";

import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import {
  getUserProfile,
  updateUserProfile,
} from "../../controller/user.controller";

const router = Router();

router.get("/user/profile", isAuthenticate, getUserProfile);

router.put("/users/profile", isAuthenticate, updateUserProfile);

export { router as userWebRoutes };
