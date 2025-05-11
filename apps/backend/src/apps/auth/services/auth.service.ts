import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/config/prisma";
import { string, z } from "zod";
import { Request, Response } from "express";
import { LoginDTO, RegisterUserDTO, User } from "@gemmarket/contracts";
import { CartService } from "@/apps/cart/services/cart.service";
const cartService = new CartService();
class AuthService {
  async register(
    registerBody: RegisterUserDTO
  ): Promise<{ token: string; user: User }> {
    const { password, firstName, lastName, email, role } = registerBody; // Destructure all required fields
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email, // Include email
        password: hashedPassword, // Use hashed password
        firstName, // Include firstName
        lastName, // Include lastName
        role, // Include role
      },
    });

    await cartService.createCart(user.id);

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    const userData = {
      ...user,
    };
    delete userData.password;

    return { token, user: userData };
  }

  async weblogin(loginBody: LoginDTO): Promise<{ token: string; user: User }> {
    const { email, password } = loginBody;
    const user = await prisma.user.findUnique({
      where: { email, isActive: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (!["SELLER", "BUYER"].includes(user.role)) {
      throw new Error(
        "User does not have a valid role. Allowed roles are 'SELLER', 'BUYER'."
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );
    const userData = {
      ...user,
    };
    delete userData.password;

    return { token, user: userData };
  }

  async dashboardlogin(
    loginBody: LoginDTO
  ): Promise<{ token: string; user: User }> {
    const { email, password } = loginBody;
    const user = await prisma.user.findUnique({
      where: { email, isActive: true },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (!["ADMIN", "ENDORSER", "SUPERUSER"].includes(user.role)) {
      throw new Error(
        "User does not have a valid role. Allowed roles are 'ADMIN', 'ENDORSER'."
      );
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1y" }
    );
    const userData = {
      ...user,
    };

    delete userData.password;

    return { token, user: userData };
  }

  async logout(token: string) {
    await prisma.blacklistedToken.create({ data: { token } });
  }
}
export default AuthService;
