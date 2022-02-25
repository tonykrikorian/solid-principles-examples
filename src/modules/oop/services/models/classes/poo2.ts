/* eslint-disable prettier/prettier */

import { BadRequestException } from '@nestjs/common';

abstract class BaseModel {
  protected id: number;
  protected createdAt: string;
  constructor() {
    this.id = this.generateId();
    this.createdAt = new Date().toLocaleDateString();
  }

  private generateId() {
    return Math.floor(Math.random() * 10);
  }
}
interface IBaseModel {
  text: string;

  save(): void;
}

interface IMainCategory extends IBaseModel {
  salary: number;
  percentage: number;
}

class MainCategory extends BaseModel implements IMainCategory {
  private theoricalAmmount: number;
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

const funCategory = new MainCategory(2500000, 10, 'Diversion');

funCategory.save();
