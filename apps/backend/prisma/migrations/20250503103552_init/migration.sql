-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPERUSER', 'BUYER', 'SELLER', 'ADMIN', 'ENDORSER');

-- CreateEnum
CREATE TYPE "GEMSTONE_STATUS" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING', 'SOLD');

-- CreateTable
CREATE TABLE "Gemstone" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "shape" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "treatment" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "dimension" TEXT NOT NULL,
    "certification" TEXT NOT NULL,
    "color_grade" TEXT NOT NULL,
    "clarity_grade" TEXT NOT NULL,
    "cut_grade" TEXT NOT NULL,
    "polish" TEXT NOT NULL,
    "symmetry" TEXT NOT NULL,
    "fluorescence" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "transparency" TEXT NOT NULL,
    "color_saturation" TEXT NOT NULL,
    "additional_specification" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "origin" TEXT NOT NULL,
    "certification_document" TEXT NOT NULL,
    "certificationStatus" BOOLEAN NOT NULL,
    "sellerId" INTEGER NOT NULL,
    "status" "GEMSTONE_STATUS" NOT NULL DEFAULT 'PENDING',
    "quantity" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "allowOffers" BOOLEAN NOT NULL DEFAULT false,
    "showOnSaleLabel" BOOLEAN NOT NULL DEFAULT false,
    "chargeForShipping" BOOLEAN NOT NULL DEFAULT false,
    "isFeatured" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Gemstone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GemstoneImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "gemstoneId" INTEGER NOT NULL,

    CONSTRAINT "GemstoneImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isRead" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "picture" TEXT,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlacklistedToken" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlacklistedToken_pkey" PRIMARY KEY ("id")
);

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
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BlacklistedToken_token_key" ON "BlacklistedToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "CartItem_cartId_productId_color_size_key" ON "CartItem"("cartId", "productId", "color", "size");

-- AddForeignKey
ALTER TABLE "GemstoneImage" ADD CONSTRAINT "GemstoneImage_gemstoneId_fkey" FOREIGN KEY ("gemstoneId") REFERENCES "Gemstone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CartItem" ADD CONSTRAINT "CartItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Gemstone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
