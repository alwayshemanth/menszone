/*
  Warnings:

  - You are about to drop the column `email` on the `ProductReview` table. All the data in the column will be lost.
  - Added the required column `emailhere` to the `ProductReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductReview" DROP CONSTRAINT "ProductReview_email_fkey";

-- AlterTable
ALTER TABLE "ProductReview" DROP COLUMN "email",
ADD COLUMN     "emailhere" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductReview" ADD CONSTRAINT "ProductReview_emailhere_fkey" FOREIGN KEY ("emailhere") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
