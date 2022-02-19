/* eslint-disable prettier/prettier */
import Expense from '../models/classes/expense.model';

const funExpense = new Expense(1000, 'Compra amazon Prime anual');

funExpense.saveExpense();

funExpense.convertInUSD();
