/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { IRenewalStrategy } from '../../interfaces/strategies/strategy.interface';

@Injectable()
export default class RenewalsContext {
  private _strategy: IRenewalStrategy;

  constructor(private strategy: IRenewalStrategy) {
    this._strategy = strategy;
  }

  public set setStrategy(value: IRenewalStrategy) {
    this._strategy = value;
  }

  public renewal() {
    this._strategy.renewal();
  }
}
