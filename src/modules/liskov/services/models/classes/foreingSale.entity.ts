/* eslint-disable prettier/prettier */
import AbstractSale from './sale.abstract';

export default class ForeingSale extends AbstractSale {
  constructor(ammount: number, customer: string, taxes = 0) {
    super(ammount, customer, taxes);
  }
  public generate() {
    console.log('Se genera la venta');
  }
  public calculateTaxes() {
    throw new Error('Method not implemented.');
  }
}
