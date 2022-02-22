/* eslint-disable prettier/prettier */
import Persona from './persona.model';

export default class Mesero extends Persona {
  constructor(nombre: string) {
    super(nombre);
  }

  public override accion(): void {
    console.log('Atender mesas en el bar');
  }
}
