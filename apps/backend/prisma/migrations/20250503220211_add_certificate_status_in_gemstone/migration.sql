/*
  Warnings:

  - The `certificationStatus` column on the `Gemstone` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "CERTIFICATE_STATUS" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING');

-- AlterEnum
ALTER TYPE "GEMSTONE_STATUS" ADD VALUE 'AVIALABLE';

-- AlterTable
ALTER TABLE "Gemstone" DROP COLUMN "certificationStatus",
ADD COLUMN     "certificationStatus" "CERTIFICATE_STATUS" NOT NULL DEFAULT 'PENDING';
