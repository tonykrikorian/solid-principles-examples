/* eslint-disable prettier/prettier */
import BaseModel from './base.model';
import * as numeral from 'numeral';

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
      salary: `${numeral(this.salary).format('0,0')} ${this.currency}`,
      percentage: `${numeral(this.percentage / 100).format('0.00%')}`,
      balance: `${numeral(this.balance).format('0,0')} ${this.currency}`,
      theoricalAmmount: `${numeral(this.theoricalAmmount).format('0,0')} ${
        this.currency
      }`,
      createdAt: this.createdAt,
    };
  }
}
