/*
  Warnings:

  - You are about to drop the `expenses_periods` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "expenses_periods";

-- CreateTable
CREATE TABLE "periods" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "period" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "periods_pkey" PRIMARY KEY ("id")
);
