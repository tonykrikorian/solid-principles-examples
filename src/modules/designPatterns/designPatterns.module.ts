/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import DesignPatternsController from './designPatterns.controller';
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
  ],
})
export default class DesignPatternsModule {}
