/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import AbstractAccountDeposit from './abstractAccountDeposits';

@Injectable()
export default class FanAccountDeposit extends AbstractAccountDeposit {
  protected depositIntoAccount() {
    console.log('Logica para depositos en cuenta fan');
  }
}
