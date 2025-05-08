import bcrypt from "bcryptjs";
import prisma from "@/config/prisma";
import { CreateUserDTO, EditUserDTO, User } from "@gemmarket/contracts";
import { Prisma } from "@prisma/client";

export class UserService {
  async create(createUserBody: CreateUserDTO): Promise<User> {
    const { password, firstName, lastName, email, role } = createUserBody; // Destructure all required fields
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

  async editUser(
    userId: string,
    updateUserBody: Partial<EditUserDTO>
  ): Promise<User> {
    const { password } = updateUserBody;

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateUserBody.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { ...updateUserBody },
    });

    const userData: User = {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      role: updatedUser.role,
    };

    return userData;
  }

  // Delete a user by ID
  async deleteUser(userId: string) {
    const user = await prisma.user.update({
      where: { id: userId, isActive: true },
      data: {
        isActive: false,
      },
    });
    return user;
  }

  async searchUsers(query: string) {
    const users = await prisma.user.findMany({
      where: {
        AND: [
          // Only apply this condition if the query is not empty
          ...(query
            ? [
                {
                  OR: [
                    {
                      email: {
                        contains: query,
                        mode: Prisma.QueryMode.insensitive,
                      },
                    },
                    {
                      firstName: {
                        contains: query,
                        mode: Prisma.QueryMode.insensitive,
                      },
                    },
                    {
                      lastName: {
                        contains: query,
                        mode: Prisma.QueryMode.insensitive,
                      },
                    },
                  ],
                },
              ]
            : []),
          {
            role: {
              in: ["BUYER", "SELLER"], // Filter by role regardless of the query
            },
          },
        ],
      },
    });

    return users;
  }

  // Get user by ID
  async getUserById(userId: string) {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });
    return user;
  }

  async userProfile() {}

  async upadateUserProfile() {}
}
