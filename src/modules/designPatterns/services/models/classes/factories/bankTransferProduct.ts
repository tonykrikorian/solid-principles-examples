/* eslint-disable prettier/prettier */
import { IPaymentMethod } from '../../interfaces/factories/paymentMethod.interface';

export default class BankTransferProduct implements IPaymentMethod {
  doPayment(): void {
    console.log('Implemento el pago de transferencia bancaria');
  }
}
