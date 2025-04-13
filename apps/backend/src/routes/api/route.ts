import { Router } from "express";
import { v1Route } from "./v1/route";

const router = Router();

router.use("/api", v1Route);

export { router as apiRoutes };
