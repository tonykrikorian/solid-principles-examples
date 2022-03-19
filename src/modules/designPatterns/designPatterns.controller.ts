/* eslint-disable prettier/prettier */
import { Controller, Get, Inject } from '@nestjs/common';
import {
  BankCheckFactory,
  BankTransferFactory,
  CreditCardFactory,
  WebpayFactory,
} from './services/models/classes/factories/concreteCreators';
import RenewalsContext from './services/models/classes/strategies/context.model';
import LegacyStrategy from './services/models/classes/strategies/legacyStrategy.model';

@Controller('design-patterns')
export default class DesignPatternsController {
  constructor(
    @Inject('CoreStrategy') private readonly renewalStrategy: RenewalsContext,
    private readonly webpayFactory: WebpayFactory,
    private readonly bankTransfer: BankTransferFactory,
    private readonly creditCard: CreditCardFactory,
    private readonly bankCheck: BankCheckFactory,
  ) {}

  @Get('renewal-strategy')
  public renewalStrategyEndpoint() {
    this.renewalStrategy.setStrategy = new LegacyStrategy();
    this.renewalStrategy.renewal();
  }

  @Get('payment-method-factory')
  public paymentsMethodFactory() {
    this.bankTransfer.getPaymentMethod().doPayment();
    this.bankCheck.getPaymentMethod().doPayment();
  }
}
