// App/Gemstone/Routes/GemstoneRoutes.ts
import { Router } from "express";
import {
  addGemstone,
  deleteGemstone,
  editGemstone,
  getAllGemstones,
  getGemstone,
  searchGemstones,
} from "../controller/gemstone.controller";
import { validate } from "@gemmarket/contracts";
import {
  gemstoneSchema,
  updateGemstoneSchema,
} from "../services/gemstone.service";
import { dashBoardGemstoneRoutes } from "./dashboard/route";
import { authorize, isAuthenticate } from "@/middleware/authMiddleware";
import { gemstoneWebRoutes } from "./web/route";

const router = Router();

router.use("/dashboard", dashBoardGemstoneRoutes);
router.use("/web", gemstoneWebRoutes);

// router.get("gemstone/all", getAllGemstones);
// router.post("/gemstone", isAuthenticate, validate(gemstoneSchema), addGemstone);
// router.put("gemstone/:id", validate(updateGemstoneSchema), editGemstone);
// router.delete("gemstone/:id", deleteGemstone);
// router.get("gemstone/:id", getGemstone);
// router.get("gemstone/", searchGemstones);

export { router as gemstoneRoutes };
