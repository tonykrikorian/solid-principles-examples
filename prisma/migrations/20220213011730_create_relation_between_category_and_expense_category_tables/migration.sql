/*
  Warnings:

  - Added the required column `categoryId` to the `categories_expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "categories_expenses" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "categories_expenses" ADD CONSTRAINT "categories_expenses_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
