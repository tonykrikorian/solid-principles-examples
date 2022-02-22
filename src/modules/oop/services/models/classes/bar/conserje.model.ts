/* eslint-disable prettier/prettier */
import Persona from './persona.model';

export default class Conserje extends Persona {
  constructor(nombre: string) {
    super(nombre);
  }

  public override accion(): void {
    console.log('Limpiar el bar');
  }
}
