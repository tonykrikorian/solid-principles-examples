-- CreateTable
CREATE TABLE "periods_expenses" (
    "id" SERIAL NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "salary" DECIMAL(65,30) NOT NULL,
    "period" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "periods_expenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_expenses" (
    "id" SERIAL NOT NULL,
    "salaryPercentage" INTEGER NOT NULL,
    "ammount" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_expenses_pkey" PRIMARY KEY ("id")
);
