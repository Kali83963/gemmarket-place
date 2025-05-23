import { Router } from 'express';
import { register, login,logout } from '../controllers/authController';
import { isAuthenticate, authorizeAdmin } from "../middleware/authMiddleware";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post("/logout", isAuthenticate, logout);

export default router;
