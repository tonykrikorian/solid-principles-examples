/* eslint-disable prettier/prettier */
import SaleWithTaxes from './saleWithTaxes';

export default class LocalSale extends SaleWithTaxes {
  constructor(ammount: number, customer: string, taxes: number) {
    super(ammount, customer, taxes);
  }
  public calculateTaxes() {
    throw new Error('Method not implemented.');
  }
  public generate() {
    throw new Error('Method not implemented.');
  }
}
