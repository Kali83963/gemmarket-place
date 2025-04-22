import { upload } from "@/config/multer";
import { Router } from "express";
import { uploads } from "../controller/media.controller";

const router = Router();

router.post("/uploads", upload.single("file"), uploads);

export { router as mediaRoutes };
