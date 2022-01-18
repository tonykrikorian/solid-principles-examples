/* eslint-disable prettier/prettier */
import AbstractSale from './sale.abstract';

export default class Sale extends AbstractSale {
  public generate() {
    console.log('Se genera la venta');
  }
  public calculateTaxes() {
    console.log('Se calculan los impuestos');
  }
}
