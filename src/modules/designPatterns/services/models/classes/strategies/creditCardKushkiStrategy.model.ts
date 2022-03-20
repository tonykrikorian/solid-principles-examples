/* eslint-disable prettier/prettier */
import { IPaymentStrategy } from '../../interfaces/strategies/creditcard.strategy';

export default class CreditCardKushkiStrategy implements IPaymentStrategy {
  doPayment(): void {
    console.log('Implemento el pago de tarjeta de credito con Kushki');
  }
}
