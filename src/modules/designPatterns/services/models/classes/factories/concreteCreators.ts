/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IPaymentStrategy } from '../../interfaces/strategies/creditcard.strategy';
import BankCheckProduct from './BankCheckProduct';
import BankTransferProduct from './bankTransferProduct';
import CreditCardProduct from './creditcardProduct';
import PaymentMethodFactory from './paymentMethodsFactory.model';

@Injectable()
export class CreditCardFactory extends PaymentMethodFactory {
  constructor(private strategy: IPaymentStrategy) {
    super();
  }
  public getPaymentMethod() {
    return new CreditCardProduct(this.strategy);
  }
}

@Injectable()
export class BankTransferFactory extends PaymentMethodFactory {
  public getPaymentMethod() {
    return new BankTransferProduct();
  }
}

@Injectable()
export class WebpayFactory extends PaymentMethodFactory {
  public getPaymentMethod() {
    return new WebpayFactory();
  }
}
@Injectable()
export class BankCheckFactory extends PaymentMethodFactory {
  public getPaymentMethod() {
    return new BankCheckProduct();
  }
}
