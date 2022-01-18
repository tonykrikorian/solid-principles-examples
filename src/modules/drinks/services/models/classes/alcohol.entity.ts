/* eslint-disable prettier/prettier */
import { IDrink } from '../interfaces/drink.interface';

export default class Alcohol implements IDrink {
  name: string;
  price: number;
  invoice: number;
  promo: number;
  public getPrice() {
    return this.price * this.invoice - this.promo;
  }
}
