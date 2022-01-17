/* eslint-disable prettier/prettier */
import { Drink } from '../models/classes/drink.model';

export default class InvoiceAction {
  public getTotal(drinks: Drink[]) {
    let total = 0;
    drinks.forEach((drink) => {
      if (drink.type === 'agua') total += drink.price;
      if (drink.type === 'Azucar') total += drink.price * 0.33;
      if (drink.type === 'Alcohol') total += drink.price * 0.16;
      if (drink.type === 'Energizante') total += drink.price * 0.25;
    });

    return total;
  }
}
