/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import AbstractAccountDeposit from './abstractAccountDeposits';

@Injectable()
export default class SavingsAccountDeposit extends AbstractAccountDeposit {
  protected depositIntoAccount() {
    console.log('Logica para deposito en cuenta de ahorros');
  }
}
