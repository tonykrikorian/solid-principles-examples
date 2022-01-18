/* eslint-disable prettier/prettier */

//T
export default abstract class AbstractSale {
  constructor(
    protected ammount: number,
    protected customer: string,
    protected taxes: number,
  ) {}

  public abstract generate();
  public abstract calculateTaxes();
}
