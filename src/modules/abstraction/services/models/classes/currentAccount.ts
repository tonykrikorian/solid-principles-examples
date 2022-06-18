/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import AbstractAccountDeposit from './abstractAccountDeposits';

@Injectable()
export default class CurrentAccount extends AbstractAccountDeposit {
  protected depositIntoAccount() {
    console.log('Logica para deposito cuenta corriente');
  }
}
