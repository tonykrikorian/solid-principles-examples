/* eslint-disable prettier/prettier */
import { writeFileSync } from 'fs';
import { join } from 'path';
//Enums
enum TypeFormat {
  JsonType = '1',
  PipeType = '2',
}

enum TypeCharacter {
  UpperCase = '1',
  LowerCase = '2',
}

//IBuilder
interface IBuilderGenerator {
  reset(): void;
  setPath(path: string): void;
  setName(name: string): void;
  setContent(content: string[]): void;
  setTypeFormat(type: TypeFormat): void;
  setTypeCharacter(character: TypeCharacter): void;
}

//Product (Tiene los datos que se van a llenar en el builder)
class Generator {
  public path: string;
  public name: string;
  public content: string[];
  public type: TypeFormat;
  public character: TypeCharacter;

  public save() {
    let result: string =
      this.type === TypeFormat.JsonType ? this.getJson() : this.getPipe();
    if (this.character === TypeCharacter.UpperCase)
      result = result.toUpperCase();
    if (this.character === TypeCharacter.LowerCase)
      result = result.toLowerCase();

    writeFileSync(join(__dirname, this.path), result);
  }

  private getJson() {
    return JSON.stringify(this.content);
  }

  private getPipe() {
    return this.content.reduce((prev, current) => `${prev} | ${current}`);
  }
}

//ConcreteBuilder
class GeneratorConcreteBuilder implements IBuilderGenerator {
  private _generator: Generator;

  constructor() {
    this.reset();
  }
  reset(): void {
    this._generator = new Generator();
  }
  setPath(path: string): void {
    this._generator.path = path;
  }
  setName(name: string): void {
    this._generator.name = name;
  }
  setContent(content: string[]): void {
    this._generator.content = content;
  }
  setTypeFormat(type: TypeFormat): void {
    this._generator.type = type;
  }
  setTypeCharacter(character: TypeCharacter): void {
    this._generator.character = character;
  }

  getGenerator() {
    return this._generator;
  }
}

//Director
class GeneratorDirector {
  private _builder: IBuilderGenerator;

  public set builder(value: IBuilderGenerator) {
    this._builder = value;
  }

  constructor(builder: IBuilderGenerator) {
    this._builder = builder;
  }

  public createSimpleJson(content: string[], path: string) {
    this._builder.reset();
    this._builder.setContent(content);
    this._builder.setPath(path);
    this._builder.setTypeFormat(TypeFormat.JsonType);
  }
  public createSimplePipe(content: string[], path: string) {
    this._builder.reset();
    this._builder.setContent(content);
    this._builder.setPath(path);
    this._builder.setTypeFormat(TypeFormat.PipeType);
    this._builder.setTypeCharacter(TypeCharacter.LowerCase);
  }
}
