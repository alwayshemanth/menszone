-- CreateEnum
CREATE TYPE "WorkMode" AS ENUM ('remote', 'hybrid', 'office');

-- AlterTable
ALTER TABLE "ProductReview" ALTER COLUMN "rating" SET DEFAULT 0;
