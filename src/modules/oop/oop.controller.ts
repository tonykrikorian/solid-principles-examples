/* eslint-disable prettier/prettier */

import { Controller, Get, Inject, Query } from '@nestjs/common';
import {
  InternetSaleFactory,
  StoreSaleFactory,
} from './services/models/classes/factory/factory';

@Controller()
export default class OopController {
  constructor(
    @Inject('InternetSale') private readonly internetSale: InternetSaleFactory,
    @Inject('StoreSale') private readonly storeSale: StoreSaleFactory,
  ) {}

  @Get()
  public internetSales(@Query('total') total: number) {
    return this.internetSale.getSale().sell(total);
  }

  @Get()
  public storeSales(@Query('total') total: number) {
    return this.storeSale.getSale().sell(total);
  }
}
