/* eslint-disable prettier/prettier */
import Persona from './persona.model';

export default class Cantinero extends Persona {
  constructor(nombre: string) {
    super(nombre);
  }
  public override accion(): void {
    console.log('Preparar bebidas');
  }
}
