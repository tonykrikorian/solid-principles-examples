/* eslint-disable prettier/prettier */

/**
 * Esta es la acción principal, pero los distintos objetos
 * tienen difrentes maneras o estrategias de implementar esta acción
 */
interface IStrategy {
  run(): void;
}

//Concrete Strategy
class CarStrategy implements IStrategy {
  run(): void {
    console.log('Soy un carro y me muevo con 4 ruedas');
  }
}

//Concrete Strategy
class MotoStrategy implements IStrategy {
  run(): void {
    console.log('Soy una moto y me muevo en 2 ruedas');
  }
}

/**
 * Context class
 * La Context class recibe la estrategia por constructor
 * Esto permite cambiar los comportamientos y/o las estrategias en
 * tiempo de ejecución
 */
class Context {
  private _strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this._strategy = strategy;
  }

  public set strategy(value: IStrategy) {
    this._strategy = value;
  }
  public run() {
    this._strategy.run();
  }
}

const context = new Context(new CarStrategy());
context.run();

context.strategy = new MotoStrategy();
context.run();
