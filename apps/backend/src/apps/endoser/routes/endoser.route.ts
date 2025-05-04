import { Router } from "express";
import { endoserDashboardRoutes } from "./dashboard/route";

const router = Router();

router.use("/dashboard", endoserDashboardRoutes);

export { router as endoserRoutes };
