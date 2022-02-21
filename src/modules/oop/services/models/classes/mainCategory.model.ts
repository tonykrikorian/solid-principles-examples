/* eslint-disable prettier/prettier */
import BaseModel from './base.model';

export default class MainCategory extends BaseModel {
  public salary: number;
  public percentage: number;
  private balance = 0;
  public theoricalAmmount: number;

  constructor(
    name: string,
    salary: number,
    percentage: number,
    public readonly currency = 'CLP',
  ) {
    super();
    this.name = name;
    this.salary = salary;
    this.percentage = percentage;

    this.calculateTheoricalAmmount();
  }

  private calculateTheoricalAmmount() {
    this.theoricalAmmount = this.salary * (this.percentage / 100);
  }

  public save(): void {
    console.log('Category saved');
    const formatedCategoryData = this.formatData();
    console.table(formatedCategoryData);
  }

  private formatData() {
    return {
      id: this.id,
      name: this.name,
      salary: `${this.salary} ${this.currency}`,
      percentage: `${this.percentage}%`,
      balance: `${this.balance} ${this.currency}`,
      theoricalAmmount: `${this.theoricalAmmount} ${this.currency}`,
      createdAt: this.createdAt,
    };
  }
}
