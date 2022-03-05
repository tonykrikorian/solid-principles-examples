/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import OopController from './oop.controller';
import {
  InternetSaleFactory,
  StoreSaleFactory,
} from './services/models/classes/factory/factory';

@Module({
  controllers: [OopController],
  providers: [
    {
      provide: 'InternetSale',
      useFactory: () => {
        return new InternetSaleFactory(3, 1);
      },
    },
    {
      provide: 'StoreSale',
      useFactory: () => {
        return new StoreSaleFactory(10);
      },
    },
  ],
})
export default class OopModule {}
