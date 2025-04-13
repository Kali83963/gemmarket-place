import express from "express";
import { isAuthenticate, authorizeAdmin } from "../middleware/authMiddleware";
import { deleteUser } from "../controllers/adminController";
import { getAllUsers } from "../controllers/adminController";

const router = express.Router();

router.delete("/user/:id", isAuthenticate, authorizeAdmin, deleteUser);
router.get("/users", isAuthenticate, authorizeAdmin, getAllUsers);

export default router;
