/*
  Warnings:

  - A unique constraint covering the columns `[id,period]` on the table `periods` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "periods_id_period_key" ON "periods"("id", "period");
