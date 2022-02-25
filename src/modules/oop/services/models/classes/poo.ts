/* eslint-disable prettier/prettier */
import * as numeral from 'numeral';

interface CategoryResponse {
  status: string;
  message: string;
  value: unknown;
}

interface IFormatter {
  formatValue(value, formatter): string;
}

class FormatValues implements IFormatter {
  formatValue(value: any, formatter: any): string {
    return numeral(value).format(formatter);
  }
}

class BaseModel {
  protected id: number;
  protected createdAt: string;
  public text: string;
  public ammount: number;

  constructor(text: string, ammount?: number) {
    this.text = text;
    this.ammount = ammount;
    this.id = Math.floor(Math.random() * 10);
    this.createdAt = new Date().toLocaleString();
  }
  public save(): void {
    console.log('Save clase padre');
  }
}

class Category extends BaseModel {
  protected salary: number;
  constructor(text: string, ammount: number, salary: number) {
    super(text, ammount);
    this.text = text;
    this.ammount = ammount;
    this.salary = salary;
  }

  protected isGraterThanSalary(theoricalAmmount: number): CategoryResponse {
    return {
      message: '',
      status: 'Error',
      value: theoricalAmmount,
    };
  }
}

class MainCategory extends Category {
  protected theroicalAmmount: number;
  private percentage: number;
  constructor(
    text: string,
    ammount: number,
    salary: number,
    percentage: number,
    private readonly formatter?: IFormatter,
  ) {
    super(text, ammount, salary);
    this.text = text;
    this.ammount = ammount;
    this.salary = salary;
    this.percentage = percentage;
    this.theroicalAmmount = this.calculateTheroricalAmmount();
  }

  protected override isGraterThanSalary(ammount: number): CategoryResponse {
    if (this.percentage > 100)
      if (ammount > this.salary)
        return {
          status: 'Error',
          message: 'El porcentage es mayor al 100%',
          value: `${this.percentage}%`,
        };

    if (ammount > this.salary)
      return {
        status: 'Error',
        message: 'El monto terorico es mayor al salario entero',
        value: ammount,
      };

    return {
      status: 'Ok',
      message: 'calculado correctamente',
      value: this.formatter.formatValue(ammount, 'CLP0,0'),
    };
  }
  protected calculateTheroricalAmmount(): number {
    return this.salary * (this.percentage / 100);
  }

  public override save(): void {
    const isGratherThanSalary = this.isGraterThanSalary(this.theroicalAmmount);
    if (isGratherThanSalary.status === 'Ok') {
      const data = {
        id: this.id,
        text: this.text,
        salary: this.salary,
        percentage: this.percentage,
        balance: 0,
        theoricalAmmount: this.theroicalAmmount,
        createdAt: this.createdAt,
      };
      console.log(data);
    } else console.log(isGratherThanSalary);
  }
}

const funCategory = new MainCategory(
  'Diversión',
  0,
  2500000,
  101,
  new FormatValues(),
);

funCategory.save();
