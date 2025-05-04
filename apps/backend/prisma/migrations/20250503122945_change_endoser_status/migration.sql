-- CreateEnum
CREATE TYPE "ENDORSER_STATUS" AS ENUM ('ACCEPTED', 'REJECTED', 'PENDING', 'SOLD');

-- CreateTable
CREATE TABLE "GemstoneVerifier" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "status" "ENDORSER_STATUS" NOT NULL DEFAULT 'PENDING',
    "certificationNumber" TEXT NOT NULL,
    "certifyingAuthority" TEXT NOT NULL,
    "certificationType" TEXT NOT NULL,
    "certificationExpiryDate" TIMESTAMP(3),
    "yearsOfExperience" INTEGER,
    "specializations" TEXT[],
    "professionalMemberships" TEXT[],
    "verificationMethods" TEXT[],
    "verificationEquipment" TEXT[],
    "endorserBio" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GemstoneVerifier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GemstoneVerifier_userId_key" ON "GemstoneVerifier"("userId");

-- AddForeignKey
ALTER TABLE "GemstoneVerifier" ADD CONSTRAINT "GemstoneVerifier_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
