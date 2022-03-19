/* eslint-disable prettier/prettier */
import { IRenewalStrategy } from '../../interfaces/strategies/strategy.interface';

export default class LegacyStrategy implements IRenewalStrategy {
  renewal(): void {
    console.log('Renovación polizas de Legacy');
  }
}
