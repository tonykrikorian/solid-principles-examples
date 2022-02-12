/*
  Warnings:

  - A unique constraint covering the columns `[period]` on the table `periods` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "periods_period_key" ON "periods"("period");
