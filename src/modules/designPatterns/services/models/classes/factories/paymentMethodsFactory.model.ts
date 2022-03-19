/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';

//Abstract creator
@Injectable()
export default abstract class PaymentMethodFactory {
  public abstract getPaymentMethod();
}
