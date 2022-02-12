/*
  Warnings:

  - A unique constraint covering the columns `[period]` on the table `periods` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "periods_id_period_key";

-- CreateIndex
CREATE UNIQUE INDEX "periods_period_key" ON "periods"("period");
