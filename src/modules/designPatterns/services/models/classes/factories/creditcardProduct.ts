/* eslint-disable prettier/prettier */
import { IPaymentMethod } from '../../interfaces/factories/paymentMethod.interface';

export default class CreditCardProduct implements IPaymentMethod {
  doPayment(): void {
    console.log('Implemento el pago de la tarjeta de credito');
  }
}
