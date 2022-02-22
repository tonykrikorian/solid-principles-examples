/* eslint-disable prettier/prettier */
export default class Persona {
  public nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  public accion(): void {
    console.log('Acción padre');
  }
}
