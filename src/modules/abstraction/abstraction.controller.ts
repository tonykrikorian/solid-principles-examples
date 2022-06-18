/* eslint-disable prettier/prettier */
import { Controller, Inject, Post } from '@nestjs/common';
import AbstractAccountDeposit from './services/models/classes/abstractAccountDeposits';

@Controller('abstraction')
export default class AbstractionController {
  constructor(
    @Inject('SavingsAccount')
    private readonly savingsAccountService: AbstractAccountDeposit,
    @Inject('CurrentAccount')
    private readonly currentAccountService: AbstractAccountDeposit,
  ) {}

  @Post('savings-account-deposit')
  public savingsAccountDeposit() {
    return this.savingsAccountService.deposit();
  }

  @Post('current-account-deposit')
  public currentAccountDeposit() {
    return this.currentAccountService.deposit();
  }
}
