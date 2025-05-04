import { Router } from "express";

import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import {
  creatEendoser,
  deletEendoser,
  editEndoser,
  getEndoser,
  searchEndoser,
} from "../../controller/endoser.controller";

const router = Router();

router.post(
  "/endoser",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  creatEendoser
);

router.get(
  "/endoser/",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  searchEndoser
);
router.get(
  "/endoser/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  getEndoser
);

router.put(
  "/endoser/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  editEndoser
);

router.delete(
  "/endoser/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  deletEendoser
);

// router.get("/endoser/profile", isAuthenticate, getUserProfile);

// router.put("/endoser/profile", isAuthenticate, updateUserProfile);

export { router as endoserDashboardRoutes };
