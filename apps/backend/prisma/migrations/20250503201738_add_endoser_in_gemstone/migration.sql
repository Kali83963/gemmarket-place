-- AlterTable
ALTER TABLE "Gemstone" ADD COLUMN     "verifiedById" TEXT;

-- AddForeignKey
ALTER TABLE "Gemstone" ADD CONSTRAINT "Gemstone_verifiedById_fkey" FOREIGN KEY ("verifiedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
