/* eslint-disable prettier/prettier */

import CalculatesCategories from '../models/classes/expenses/calculatesCategories.model';
import MainCategory from '../models/classes/expenses/mainCategory.model';

const funCategory = new MainCategory('Diversion', 2500000, 10);

const fixedExpenses = new MainCategory('Gastos fijos', 2500000, 30);

const calculate = new CalculatesCategories([funCategory, fixedExpenses]);
const isTotalAmmountValid = calculate.isAmmountGraterThanSalary();
const isTotalPercentageValid = calculate.arePercentagesGraterThan100Percent();

if (isTotalAmmountValid.status && isTotalPercentageValid.status) {
  [funCategory, fixedExpenses].forEach((value) => value.save());
} else {
  console.table(isTotalAmmountValid);
  console.table(isTotalPercentageValid);
}
