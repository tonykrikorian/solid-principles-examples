/* eslint-disable prettier/prettier */
import { IRenewalStrategy } from '../../interfaces/strategies/strategy.interface';

export default class CoreStrategy implements IRenewalStrategy {
  renewal(): void {
    console.log('Renovación polizas de Core');
  }
}
