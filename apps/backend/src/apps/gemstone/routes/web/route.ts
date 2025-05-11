// App/Gemstone/Routes/GemstoneRoutes.ts
import { Router } from "express";

import { validate } from "@gemmarket/contracts";

import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import {
  gemstoneSchema,
  updateGemstoneSchema,
} from "../../services/gemstone.service";
import {
  addGemstone,
  editGemstone,
  getAllGemstones,
  getGemstone,
  getGemstoneAdmin,
  getGemstoneUser,
  updateGemstoneBlockChainId,
} from "../../controller/gemstone.controller";

const router = Router();

router.get("/gemstone/", getAllGemstones);
router.get("/gemstone/user", getGemstoneUser);
router.post(
  "/gemstone",
  isAuthenticate,
  // authorize(["SELLER"]),
  validate(gemstoneSchema),
  addGemstone
);
router.put(
  "/gemstone/block-chain/:id",
  isAuthenticate,
  // authorize(["SELLER"]),
  updateGemstoneBlockChainId
);
router.put(
  "/gemstone/:id",
  validate(updateGemstoneSchema),
  isAuthenticate,
  authorize(["SELLER"]),
  editGemstone
);
router.get("/gemstone/:id", getGemstone);

export { router as gemstoneWebRoutes };
