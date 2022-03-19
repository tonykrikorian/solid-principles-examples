/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import DesignPatternsController from './designPatterns.controller';
import {
  BankCheckFactory,
  BankTransferFactory,
  CreditCardFactory,
  WebpayFactory,
} from './services/models/classes/factories/concreteCreators';
import RenewalsContext from './services/models/classes/strategies/context.model';
import CoreStrategy from './services/models/classes/strategies/coreStrategy.model';

@Module({
  controllers: [DesignPatternsController],
  providers: [
    {
      provide: 'CoreStrategy',
      useFactory: () => {
        return new RenewalsContext(new CoreStrategy());
      },
    },

    CreditCardFactory,
    WebpayFactory,
    BankTransferFactory,
    BankCheckFactory,
  ],
})
export default class DesignPatternsModule {}
