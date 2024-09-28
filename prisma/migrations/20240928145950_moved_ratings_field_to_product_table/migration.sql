/*
  Warnings:

  - You are about to drop the column `rating` on the `ProductReview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "rating" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ProductReview" DROP COLUMN "rating";
