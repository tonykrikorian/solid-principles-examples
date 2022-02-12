-- CreateTable
CREATE TABLE "CategoriesExpensesInPeriods" (
    "periodId" INTEGER NOT NULL,
    "expenseCategoryId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CategoriesExpensesInPeriods_pkey" PRIMARY KEY ("periodId","expenseCategoryId")
);

-- AddForeignKey
ALTER TABLE "CategoriesExpensesInPeriods" ADD CONSTRAINT "CategoriesExpensesInPeriods_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "periods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesExpensesInPeriods" ADD CONSTRAINT "CategoriesExpensesInPeriods_expenseCategoryId_fkey" FOREIGN KEY ("expenseCategoryId") REFERENCES "categories_expenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
