/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import BankCheckProduct from './BankCheckProduct';
import BankTransferProduct from './bankTransferProduct';
import CreditCardProduct from './creditcardProduct';
import PaymentMethodFactory from './paymentMethodsFactory.model';

@Injectable()
export class CreditCardFactory extends PaymentMethodFactory {
  public getPaymentMethod() {
    return new CreditCardProduct();
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
