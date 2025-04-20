import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/config/prisma";
import { string, z } from "zod";
import { Request, Response } from "express";
import { LoginDTO, RegisterUserDTO, User } from "@gemmarket/contracts";

class AuthService {
  async register(registerBody: RegisterUserDTO): Promise<User> {
    const { password, firstName, lastName, email, role } = registerBody; // Destructure all required fields
    const hashedPassword = await bcrypt.hash(password, 10);

    const user: User = await prisma.user.create({
      data: {
        email, // Include email
        password: hashedPassword, // Use hashed password
        firstName, // Include firstName
        lastName, // Include lastName
        role, // Include role
      },
    });

    const userData: User = {
      firstName: user.email,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return userData;
  }

  async login(loginBody: LoginDTO): Promise<{ token: string; user: User }> {
    const { email, password } = loginBody;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error("User not found");
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
    console.log(user.id)
    const userData: User = {
      firstName: user.email,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };

    return { token, user: userData };
  }

  async logout(token: string) {
    await prisma.blacklistedToken.create({ data: { token } });
  }
}
export default AuthService;
