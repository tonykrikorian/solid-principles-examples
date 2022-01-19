/* eslint-disable prettier/prettier */
import { RenovarPoliza } from '../interfaces/renovarPoliza.interface';

export default class PolizaAnulada implements RenovarPoliza {
  public renovar() {
    console.log('Algoritmo para las polizas anuladas');
  }
}
