/*
  Warnings:

  - Added the required column `additional_specification` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `certification` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `certification_document` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clarity_grade` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color_grade` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color_saturation` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cut_grade` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dimension` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fluorescence` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `polish` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shape` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sku` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `symmetry` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transparency` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `treatment` to the `Gemstone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Gemstone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gemstone" ADD COLUMN     "additional_specification" TEXT NOT NULL,
ADD COLUMN     "allowOffers" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "certification" TEXT NOT NULL,
ADD COLUMN     "certification_document" TEXT NOT NULL,
ADD COLUMN     "chargeForShipping" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "clarity_grade" TEXT NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "color_grade" TEXT NOT NULL,
ADD COLUMN     "color_saturation" TEXT NOT NULL,
ADD COLUMN     "cut_grade" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dimension" TEXT NOT NULL,
ADD COLUMN     "fluorescence" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "polish" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL,
ADD COLUMN     "shape" TEXT NOT NULL,
ADD COLUMN     "showOnSaleLabel" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "sku" TEXT NOT NULL,
ADD COLUMN     "symmetry" TEXT NOT NULL,
ADD COLUMN     "transparency" TEXT NOT NULL,
ADD COLUMN     "treatment" TEXT NOT NULL,
ADD COLUMN     "weight" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "GemstoneImage" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "gemstoneId" INTEGER NOT NULL,

    CONSTRAINT "GemstoneImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GemstoneImage" ADD CONSTRAINT "GemstoneImage_gemstoneId_fkey" FOREIGN KEY ("gemstoneId") REFERENCES "Gemstone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
