/* eslint-disable prettier/prettier */
import LocalSale from '../models/classes/localSales';
import S1 from '../models/classes/s1.class';
import S2 from '../models/classes/s2.class';
import AbstractSale from '../models/classes/sale.abstract';
import Sale from '../models/classes/sale.entity';
import SaleWithTaxes from '../models/classes/saleWithTaxes';
import T from '../models/classes/t.class';

export default class MainService {
  public main() {
    let t: T = new S1();
    console.log(t.getName());

    t = new S2();
    console.log(t.getName());

    const sale: AbstractSale = new Sale(1, 'tony');
    sale.generate();

    const localSale: SaleWithTaxes = new LocalSale(2, 'Pepe', 0.25);
    localSale.generate();
    localSale.calculateTaxes();
  }
}
