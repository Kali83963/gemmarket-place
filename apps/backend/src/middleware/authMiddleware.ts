import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prisma";
import { errorResponse } from "@/utils/response";
const JWT_SECRET = process.env.JWT_SECRET as string;

interface DecodedUser {
  id: string;
  role: string;
}

declare module "express-serve-static-core" {
  interface Request {
    user?: DecodedUser;
  }
}

declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: string };
    }
  }
}

export const isAuthenticate = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.cookies.token;

  if (!token) {
    errorResponse(res, "Unauthorized: No token provided", 401);
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      role: string;
    };

    // Check if user exists in the database
    const user = await prisma.user.findUnique({ where: { id: decoded.id } });

    if (!user) {
      errorResponse(res, "Unauthorized: User not found", 401);
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    errorResponse(res, "Unauthorized: Invalid or expired token", 401);
  }
};

export const authorize = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Forbidden: You do not have permission" });
    }
    next();
  };
};

export const authorizeAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.user) {
    res.status(403).json({ message: "Forbidden: No user found in request" });
    return;
  }

  if (req.user.role !== "ADMIN") {
    res.status(403).json({ message: "Forbidden: Requires Admin role" });
    return;
  }

  next();
};
