/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Candidate` table. All the data in the column will be lost.
  - The `status` column on the `Candidate` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `residentialAddress` to the `Candidate` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CandidateStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "ReferenceType" AS ENUM ('PASTOR', 'RELATIVE');

-- AlterTable
ALTER TABLE "Candidate" DROP COLUMN "updatedAt",
ADD COLUMN     "agreedToConsequences" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "agreedToRules" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "agreementDate" TIMESTAMP(3),
ADD COLUMN     "baptizedByImmersion" BOOLEAN,
ADD COLUMN     "baptizedInHolySpirit" BOOLEAN,
ADD COLUMN     "baptizedInWater" BOOLEAN,
ADD COLUMN     "calledToEstablishMinistry" BOOLEAN,
ADD COLUMN     "churchName" TEXT,
ADD COLUMN     "currentAddress" TEXT,
ADD COLUMN     "currentlyPastoring" BOOLEAN,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "educationalBackground" TEXT,
ADD COLUMN     "freeFromIllness" BOOLEAN,
ADD COLUMN     "homeTownAddress" TEXT,
ADD COLUMN     "illnesses" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "isRegenerated" BOOLEAN,
ADD COLUMN     "kindOfMarriage" TEXT,
ADD COLUMN     "maritalStatus" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "ordinationDate" TIMESTAMP(3),
ADD COLUMN     "pastorName" TEXT,
ADD COLUMN     "pastorPhone" TEXT,
ADD COLUMN     "placeOfBirth" TEXT,
ADD COLUMN     "placeOfWork" TEXT,
ADD COLUMN     "presentStationPost" TEXT,
ADD COLUMN     "recognizedAsPastorOrEvangelist" BOOLEAN,
ADD COLUMN     "regenerationExperience" TEXT,
ADD COLUMN     "residentialAddress" TEXT NOT NULL,
ADD COLUMN     "roleInChurch" TEXT,
ADD COLUMN     "secularOccupation" TEXT,
ADD COLUMN     "servicePosts" JSONB,
ADD COLUMN     "spiritualBackground" TEXT,
ADD COLUMN     "spiritualGifts" TEXT,
ADD COLUMN     "sponsorAddress" TEXT,
ADD COLUMN     "sponsorName" TEXT,
ADD COLUMN     "sponsorshipType" TEXT,
ADD COLUMN     "spouseName" TEXT,
ADD COLUMN     "spousePhone" TEXT,
ADD COLUMN     "spouseSupportsMinistry" BOOLEAN,
DROP COLUMN "status",
ADD COLUMN     "status" "CandidateStatus" NOT NULL DEFAULT 'PENDING';

-- CreateTable
CREATE TABLE "Reference" (
    "id" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,
    "type" "ReferenceType" NOT NULL,
    "refereeName" TEXT,
    "refereeContact" TEXT,
    "yearsKnown" INTEGER,
    "monthsKnown" INTEGER,
    "familiarityLevel" TEXT,
    "isGenuinelyBornAgain" BOOLEAN,
    "isBaptizedInWater" BOOLEAN,
    "isBaptizedInHolySpirit" BOOLEAN,
    "christianExperience" TEXT,
    "readyForTraining" TEXT,
    "activeInChurchWork" TEXT,
    "maritalLifeComment" TEXT,
    "socialBackgroundComment" TEXT,
    "relationshipDuration" TEXT,
    "relationshipDescription" TEXT,
    "knownAsChristian" BOOLEAN,
    "characterDescription" TEXT,
    "knowledgeMatrix" JSONB,
    "submittedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acceptance" (
    "id" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,
    "dateOfResumption" TIMESTAMP(3),
    "dislikes" TEXT,
    "refereeGuarantorInfo" TEXT,
    "officialPost" TEXT,
    "directorSignedAt" TIMESTAMP(3),
    "registrarSignedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Acceptance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Acceptance_candidateId_key" ON "Acceptance"("candidateId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Reference" ADD CONSTRAINT "Reference_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acceptance" ADD CONSTRAINT "Acceptance_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidate"("id") ON DELETE CASCADE ON UPDATE CASCADE;
