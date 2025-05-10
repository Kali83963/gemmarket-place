// App/Gemstone/Routes/GemstoneRoutes.ts
import { Router } from "express";

import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import {
  gemstoneSchema,
  updateGemstoneSchema,
} from "../../services/gemstone.service";
import {
  addGemstone,
  deleteGemstone,
  editGemstone,
  generateGemstoneHash,
  getAllGemstones,
  getGemstone,
  getGemstoneAdmin,
  searchGemstones,
  updateGemstoneStatus,
  verifyGemstone,
} from "../../controller/gemstone.controller";
import { validate } from "@gemmarket/contracts";

const router = Router();

router.get(
  "/gemstone/",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER", "ENDORSER"]),
  searchGemstones
);
router.post(
  "/gemstone/verify/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER", "ENDORSER"]),
  verifyGemstone
);
router.post(
  "/gemstone/hash/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER", "ENDORSER"]),
  generateGemstoneHash
);

router.get(
  "/gemstone/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER", "ENDORSER"]),
  getGemstoneAdmin
);
router.put(
  "/gemstone/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  updateGemstoneStatus
);
router.delete(
  "/gemstone/:id",
  isAuthenticate,
  authorize(["ADMIN", "SUPERUSER"]),
  deleteGemstone
);

export { router as dashBoardGemstoneRoutes };
