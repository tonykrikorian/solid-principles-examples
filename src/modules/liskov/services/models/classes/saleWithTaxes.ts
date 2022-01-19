/* eslint-disable prettier/prettier */
import AbstractSale from './sale.abstract';

export default abstract class SaleWithTaxes extends AbstractSale {
  constructor(
    protected ammount: number,
    protected customer: string,
    protected taxes: number,
  ) {
    super(ammount, customer);
  }
  public abstract calculateTaxes();
}
