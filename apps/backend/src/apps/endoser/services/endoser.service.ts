import bcrypt from "bcryptjs";
import prisma from "@/config/prisma";
import { CreateEndoserDTO, EditEnodoserDTO } from "@gemmarket/contracts";
import { ENDORSER_STATUS, Prisma, Role } from "@prisma/client";

export class EndoserService {
  async create(createEndoserBody: CreateEndoserDTO) {
    return await prisma.$transaction(async (tx) => {
      const { user, ...verifierUpdate } = createEndoserBody; // Destructure all required fields
      const { password, ...restUserData } = user;
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(user);
      const userEntity = await tx.user.create({
        data: {
          firstName: restUserData.firstName,
          lastName: restUserData.lastName,
          email: restUserData.email,
          password: hashedPassword, // Use hashed password
          role: Role.ENDORSER, // Include role
        },
      });

      const endoser = await tx.gemstoneVerifier.create({
        data: {
          ...verifierUpdate,
          user: {
            connect: { id: userEntity.id },
          },
        },
        include: {
          user: true,
        },
      });

      return endoser;
    });
  }

  async editEndoser(
    endoserId: string,
    updateEndoserBody: Partial<EditEnodoserDTO>
  ) {
    return await prisma.$transaction(async (tx) => {
      const { user, ...verifierUpdate } = updateEndoserBody;
      const { password } = user;

      const verifier = await tx.gemstoneVerifier.update({
        where: {
          id: endoserId,
        },
        data: {
          ...verifierUpdate,
        },
      });

      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }

      const updatedUser = await tx.user.update({
        where: {
          id: verifier.userId,
        },
        data: user,
      });

      const endoser = await tx.gemstoneVerifier.findUnique({
        where: {
          id: endoserId,
        },
      });

      return endoser;
    });
  }

  // Delete a endoser by ID
  async deleteendoser(endoserId: string) {
    const endoser = await prisma.gemstoneVerifier.update({
      where: { id: endoserId },
      data: {
        user: {
          update: {
            isActive: false,
          },
        },
      },
    });
    return endoser;
  }

  async searchendosers(query: string) {
    const userRoleCondition: Prisma.GemstoneVerifierWhereInput = {
      user: {
        role: {
          in: [Role.ENDORSER],
        },
      },
    };

    const userSearchCondition: Prisma.UserWhereInput = query
      ? {
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
        }
      : {};

    const verifierSearchCondition: Prisma.GemstoneVerifierWhereInput = query
      ? {
          OR: [
            {
              phoneNumber: {
                contains: query,
                mode: Prisma.QueryMode.insensitive,
              },
            },
            {
              certificationNumber: {
                contains: query,
                mode: Prisma.QueryMode.insensitive,
              },
            },
          ],
        }
      : {};

    const where: Prisma.GemstoneVerifierWhereInput = {
      AND: [
        userRoleCondition,
        {
          OR: [{ user: userSearchCondition }, verifierSearchCondition],
        },
      ].filter(Boolean),
    };

    const endosers = await prisma.gemstoneVerifier.findMany({
      where,
      include: {
        user: true,
      },
    });

    return endosers;
  }

  // Get endoser by ID
  async getendoserById(endoserId: string) {
    const endoser = await prisma.gemstoneVerifier.findUnique({
      where: {
        id: endoserId,
      },
      select: {
        id: true,
        phoneNumber: true,
        certificationNumber: true,
        certifyingAuthority: true,
        certificationType: true,
        certificationExpiryDate: true,
        yearsOfExperience: true,
        specializations: true,
        professionalMemberships: true,
        verificationMethods: true,
        verificationEquipment: true,
        endorserBio: true,
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            isActive: true,
          },
        },
      },
    });
    console.log(endoser);
    return endoser;
  }

  async endoserProfile() {}

  async upadateendoserProfile() {}
}
