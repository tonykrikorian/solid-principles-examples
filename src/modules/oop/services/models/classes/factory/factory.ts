/* eslint-disable prettier/prettier */
//Abstract Creator

import { Injectable } from '@nestjs/common';

abstract class SaleFactory {
  public abstract getSale(): ISale;
}

//Concrete creator
@Injectable()
export class StoreSaleFactory extends SaleFactory {
  constructor(private readonly extra: number) {
    super();
  }

  public getSale(): ISale {
    return new StoreSale(this.extra);
  }
}

//Concrete creator
@Injectable()
export class InternetSaleFactory extends SaleFactory {
  constructor(private readonly tax: number, private readonly discount: number) {
    super();
  }
  public getSale(): ISale {
    return new InternetSale(this.tax, this.discount);
  }
}

//Concrete product
class StoreSale implements ISale {
  private _extra: number;

  constructor(extra: number) {
    this._extra = extra;
  }

  sell(total: number): void {
    console.log(`Total de la venta en tienda ${total + this._extra}`);
  }
}

//Concrete product
class InternetSale implements ISale {
  constructor(
    private readonly tax: number,
    private readonly discount: number,
  ) {}
  sell(total: number): void {
    console.log(
      `La venta por internet es igual a ${total + this.tax - this.discount}`,
    );
  }
}

//Product
interface ISale {
  sell(total: number): void;
}

//Implementación

const storeFactory: SaleFactory = new StoreSaleFactory(10);
const internetSale: SaleFactory = new InternetSaleFactory(1, 2);

storeFactory.getSale().sell(10);
internetSale.getSale().sell(10);
