import { Router } from "express";
import { apiRoutes } from "./api/route";

const router = Router();

router.use("", apiRoutes);

export { router as appRoutes };
