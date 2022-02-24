/* eslint-disable prettier/prettier */
import Carnivoro from './carnivoro.model';

export default class Buitre extends Carnivoro {
  public cantidadPlumas: number;

  public volar() {
    console.log(`buitre ${this.nombre} vuela`);
  }
}
