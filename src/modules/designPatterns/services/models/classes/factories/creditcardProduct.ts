/* eslint-disable prettier/prettier */
import { IPaymentMethod } from '../../interfaces/factories/paymentMethod.interface';
import { IPaymentStrategy } from '../../interfaces/strategies/creditcard.strategy';

export default class CreditCardProduct implements IPaymentMethod {
  private _strategy: IPaymentStrategy;

  constructor(private paymentStrategy: IPaymentStrategy) {
    this._strategy = paymentStrategy;
  }

  public set strategy(value: IPaymentStrategy) {
    this._strategy = value;
  }

  public doPayment(): void {
    this._strategy.doPayment();
  }
}
