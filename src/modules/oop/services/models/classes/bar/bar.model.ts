/* eslint-disable prettier/prettier */
import Persona from './persona.model';

export default class Bar {
  private personas: Persona[] = [];

  public entrar(persona: Persona): void {
    this.personas.push(persona);
    persona.accion();
  }
}
