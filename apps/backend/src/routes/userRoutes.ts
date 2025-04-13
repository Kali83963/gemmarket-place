import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

router.get('/profile', authenticate, (req, res) => {
  res.json({ message: "User Profile", user: req.user });
});

export default router;
