/*
  Warnings:

  - The values [SOLD] on the enum `ENDORSER_STATUS` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `userId` to the `Gemstone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ENDORSER_STATUS_new" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING');
ALTER TABLE "GemstoneVerifier" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "GemstoneVerifier" ALTER COLUMN "status" TYPE "ENDORSER_STATUS_new" USING ("status"::text::"ENDORSER_STATUS_new");
ALTER TYPE "ENDORSER_STATUS" RENAME TO "ENDORSER_STATUS_old";
ALTER TYPE "ENDORSER_STATUS_new" RENAME TO "ENDORSER_STATUS";
DROP TYPE "ENDORSER_STATUS_old";
ALTER TABLE "GemstoneVerifier" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Gemstone" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Gemstone" ADD CONSTRAINT "Gemstone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
