/* eslint-disable prettier/prettier */
import { IPaymentMethod } from '../../interfaces/factories/paymentMethod.interface';

export default class WebpayProduct implements IPaymentMethod {
  doPayment(): void {
    console.log('Implemento el por la plataforma Webpay');
  }
}
