import { Router } from "express";
import { apiRoutes } from "./api/route";
import { mediaRoutes } from "@/apps/media/routes/media.routes";

const router = Router();

router.use("", apiRoutes);
router.use("", mediaRoutes);

export { router as appRoutes };
