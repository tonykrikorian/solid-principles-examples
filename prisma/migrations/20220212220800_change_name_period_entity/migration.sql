/*
  Warnings:

  - You are about to drop the `categories_expenses_values` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "categories_expenses_values";

-- CreateTable
CREATE TABLE "expenses_periods" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "period" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "expenses_periods_pkey" PRIMARY KEY ("id")
);
