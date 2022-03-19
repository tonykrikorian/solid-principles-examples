/* eslint-disable prettier/prettier */
import { Controller, Get, Inject } from '@nestjs/common';
import RenewalsContext from './services/models/classes/strategies/context.model';
import LegacyStrategy from './services/models/classes/strategies/legacyStrategy.model';

@Controller('design-patterns')
export default class DesignPatternsController {
  constructor(
    @Inject('CoreStrategy') private readonly renewalStrategy: RenewalsContext,
  ) {}

  @Get('renewal-strategy')
  public renewalStrategyEndpoint() {
    this.renewalStrategy.setStrategy = new LegacyStrategy();
    this.renewalStrategy.renewal();
  }
}
