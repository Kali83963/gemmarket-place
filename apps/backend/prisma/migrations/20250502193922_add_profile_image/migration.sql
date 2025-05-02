/*
  Warnings:

  - You are about to drop the column `compareAtPrice` on the `Gemstone` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "GEMSTONE_STATUS" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING', 'SOLD');

-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SUPERUSER';

-- AlterTable
ALTER TABLE "Gemstone" DROP COLUMN "compareAtPrice",
ADD COLUMN     "status" "GEMSTONE_STATUS" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "picture" TEXT;

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT,
    "size" TEXT,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_productId_color_size_key" ON "CartItem"("cartId", "productId", "color", "size");

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Gemstone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
