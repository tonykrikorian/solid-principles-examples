/* eslint-disable prettier/prettier */
import BaseModel from './base.model';

export default class Expense extends BaseModel {
  private categoryId: number;
  constructor(ammount: number, name: string, categoryId: number) {
    super();
    this.ammount = ammount;
    this.name = name;
    this.categoryId = categoryId;
  }

  protected save(): void {
    const log = {
      id: Math.floor(Math.random()) + 1,
      ammount: `${this.ammount} CLP`,
      title: this.name,
      createdAt: new Date(),
      categoryId: this.categoryId,
    };

    console.log('Expense Added');
    console.log(log);
  }
}
