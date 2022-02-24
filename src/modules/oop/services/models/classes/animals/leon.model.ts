/* eslint-disable prettier/prettier */
import Carnivoro from './carnivoro.model';

export default class Leon extends Carnivoro {
  public colorCabello: string;

  public correr() {
    console.log(`el leon ${this.nombre} corre`);
  }
}
