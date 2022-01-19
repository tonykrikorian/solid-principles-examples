/* eslint-disable prettier/prettier */
import AbstractSale from './sale.abstract';

export default class ForeingSale extends AbstractSale {
  constructor(ammount: number, customer: string) {
    super(ammount, customer);
  }
  public generate() {
    console.log('Se genera la venta');
  }
}
