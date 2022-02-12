/*
  Warnings:

  - You are about to drop the `Period` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Period";

-- CreateTable
CREATE TABLE "categories_expenses_values" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "period" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_expenses_values_pkey" PRIMARY KEY ("id")
);
