import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create a root user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  const rootUser = await prisma.user.upsert({
    where: { email: "admin@yopmail.com" },
    update: {},
    create: {
      firstName: "Super",
      lastName: "Admin",
      email: "admin@yopmail.com",
      password: hashedPassword,
      role: Role.SUPERUSER,
    },
  });

  console.log("Seeded root user:", rootUser);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
