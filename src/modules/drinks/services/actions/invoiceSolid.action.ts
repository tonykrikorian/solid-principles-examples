/* eslint-disable prettier/prettier */
import { IDrink } from '../models/interfaces/drink.interface';

export default class InvoiceSolidAction {
  public getTotal(drinks: IDrink[]) {
    let total = 0;
    drinks.forEach((drink) => {
      total = +drink.getPrice();
    });

    return total;
  }
}
