/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { BaseModel } from './BaseModel';
import { IMainCategory } from './IMainCategory';

export class MainCategory extends BaseModel implements IMainCategory {
  public theoricalAmmount: number;
  constructor(
    public salary: number,
    public percentage: number,
    public text: string,
  ) {
    super();
  }

  private calculateTheoricalAmmount() {
    this.theoricalAmmount = this.salary * (this.percentage / 100);
  }

  private isGraterThanSalary(): boolean {
    return this.theoricalAmmount > this.salary;
  }
  save(): void {
    this.calculateTheoricalAmmount();
    if (this.isGraterThanSalary()) {
      throw new BadRequestException({
        message: 'EL monto teorico de la categoria es mayor al sueldo',
      });
    } else {
      const response = {
        id: this.id,
        salary: this.salary,
        text: this.text,
        percentage: this.percentage,
        theoricalAmmount: this.theoricalAmmount,
        createdAt: this.createdAt,
      };
      console.table(response);
    }
  }
}
