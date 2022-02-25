/* eslint-disable prettier/prettier */
interface IBaseModel {
  text: string;

  save(): void;
}

interface IMainCategory extends IBaseModel {
  salary: number;
  percentage: number;
}

class MainCategory implements IMainCategory {
  private theoricalAmmount: number;
  constructor(
    public salary: number,
    public percentage: number,
    public text: string,
  ) {}

  private calculateTheoricalAmmount() {
    this.theoricalAmmount = this.salary * (this.percentage / 100);
  }

  private isGraterThanSalary(): boolean {
    return this.theoricalAmmount > this.salary;
  }
  save(): void {
    if (this.isGraterThanSalary()) {
      const response = {
        salary: this.salary,
        text: this.text,
        percentage: this.percentage,
        theoricalAmmount: this.theoricalAmmount,
      };
      console.table(response);
    } else {
      const data = 'xx';
    }
  }
}
