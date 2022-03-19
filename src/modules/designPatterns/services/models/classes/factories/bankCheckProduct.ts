/* eslint-disable prettier/prettier */
import { IPaymentMethod } from '../../interfaces/factories/paymentMethod.interface';

export default class BankCheckProduct implements IPaymentMethod {
  doPayment(): void {
    console.log('Estoy haciendo un pago con cheque bancario');
  }
}
