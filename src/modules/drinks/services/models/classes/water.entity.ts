/* eslint-disable prettier/prettier */
import { IDrink } from '../interfaces/drink.interface';

export default class Water implements IDrink {
  name: string;
  price: number;
  invoice: number;

  public getPrice() {
    return this.price * this.invoice;
  }
}
