/* eslint-disable prettier/prettier */

//Product
//La logica de negocio va en el producto
class PreparedDrink {
  public ingredients: string[] = [];
  public milk: number;
  public water: number;
  public alcohol: number;

  public result: string;
}

//IBuilder
interface IBuilder {
  reset(): void;
  setAlcohol(alcohol: number): void;
  setWater(water: number): void;
  setMilk(milk: number): void;
  addIngredients(ingredients: string): void;
  mix(): void;
  rest(time: number): void;
}

//Concrete builder
class PreparedAlcoholicDrinkConcreteBuilder implements IBuilder {
  private _prepared: PreparedDrink;

  constructor() {
    this._prepared = new PreparedDrink();
  }

  reset(): void {
    this._prepared = new PreparedDrink();
  }
  addIngredients(ingredients: string): void {
    if (!this._prepared.ingredients) this._prepared.ingredients = [];

    this._prepared.ingredients.push(ingredients);
  }
  setAlcohol(alcohol: number): void {
    this._prepared.alcohol = alcohol;
  }
  setWater(water: number): void {
    this._prepared.water = water;
  }
  setMilk(milk: number): void {
    this._prepared.milk = milk;
  }
  mix(): void {
    const result = this._prepared.ingredients.reduce(
      (prev, current) => `${prev},${current}`,
    );

    this._prepared.result = `Bebdia preparada con ${this._prepared.alcohol} de alcohol y con los siguientes ingredientes: \n ${result}`;

    console.log('Mezclamos los ingredientes');
  }
  rest(time: number): void {
    console.log(`Dejar reposar por ${time} seconds`);
  }

  public getPreparedDrink() {
    return this._prepared;
  }
}

//Director
class BarmanDirector {
  private _builder: IBuilder;

  constructor(builder: IBuilder) {
    this._builder = builder;
  }

  public set builder(value: IBuilder) {
    this._builder = value;
  }

  public prepareMargarita() {
    this._builder.reset();
    this._builder.setAlcohol(9);
    this._builder.setWater(500);
    this._builder.addIngredients('2 limones');
    this._builder.addIngredients('pizca de sal');
    this._builder.addIngredients('1/2 taza de tequila');
    this._builder.addIngredients('3/4 taza de licor de naranja');
    this._builder.addIngredients('4 cubos de hielo');
    this._builder.mix();
    this._builder.rest(2);
  }
}

//Implementación

const builder = new PreparedAlcoholicDrinkConcreteBuilder();

const director = new BarmanDirector(builder);

director.prepareMargarita();

const preparedDrink = builder.getPreparedDrink();
console.log(preparedDrink.result);
