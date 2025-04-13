import { Request, Response, NextFunction } from 'express';
import prisma from '../config/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      res.status(400).json({ message: "All fields required" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role },
    });

    res.status(201).json({ message: "User created", user });
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "User not found" });
      return;
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET!, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
      const token = req.header("Authorization")?.split(" ")[1];

      if (!token) {
          res.status(400).json({ message: "Token missing" });
          return;
      }

      await prisma.blacklistedToken.create({ data: { token } });

      res.clearCookie("token");

      res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
      res.status(500).json({ message: "Error logging out"});
  }
};


