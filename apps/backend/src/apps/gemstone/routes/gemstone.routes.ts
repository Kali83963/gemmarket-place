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

const router = Router();

router.get("/all", getAllGemstones);
router.post("/", validate(gemstoneSchema), addGemstone);
router.put("/:id", validate(updateGemstoneSchema), editGemstone);
router.delete("/:id", deleteGemstone);
router.get("/:id", getGemstone);
router.get("/", searchGemstones);

export { router as gemstoneRoutes };
