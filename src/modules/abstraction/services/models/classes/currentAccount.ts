/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import AbstractAccountDeposit from './abstractAccountDeposits';

@Injectable()
export default class CurrentAccountDeposit extends AbstractAccountDeposit {
  protected depositIntoAccount() {
    console.log('Logica para deposito cuenta corriente');
  }
}
