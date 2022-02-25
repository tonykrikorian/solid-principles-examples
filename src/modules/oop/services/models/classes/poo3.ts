/* eslint-disable prettier/prettier */
abstract class Item {
  public id: number;
  public text: string;
  public createdAt: string;

  constructor(text: string) {
    this.id = this.generateId();
    this.text = text;
    this.createdAt = new Date().toDateString();
  }

  private generateId() {
    return Math.floor(Math.random() * 10);
  }

  public abstract save();
}

class MainCategory extends Item {
  public salary: number;
  public percentage: number;
  public theoricalAmmount: number;

  constructor(text: string, salary: number, percentage: number) {
    super(text);

    this.salary = salary;
    this.percentage = percentage;
    this.text = text;
    this.theoricalAmmount = this.calculateTheoricalAmmount();
  }

  private calculateTheoricalAmmount() {
    return this.salary * (this.percentage / 100);
  }
  public save() {
    const data = {
      id: this.id,
      text: this.text,
      percentage: this.percentage,
      theoricalAmmount: this.theoricalAmmount,
      createdAt: this.createdAt,
    };

    console.log('Guardado en base d datos');
    console.log(data);
  }
}

class MainCategories {
  constructor(private readonly items: MainCategory[]) {}

  public calculateTotal() {
    return this.items
      .map((x) => x.theoricalAmmount)
      .reduce((prev, current) => prev + current);
  }

  public calculateTotalPercentage() {
    return this.items
      .map((x) => x.percentage)
      .reduce((prev, current) => prev + current);
  }

  private calculateTotalMinorThanSalary(): boolean {
    const total = this.calculateTotal();
    return total <= this.items[0].salary;
  }

  private validatePercentageIsMinorto100Percent() {
    return this.calculateTotalPercentage() <= 100;
  }

  public validate() {
    this.items.forEach((category) => {
      if (
        this.calculateTotalMinorThanSalary() &&
        this.calculateTotalPercentage()
      )
        category.save();
    });
  }
}

const fun = new MainCategory('Diversion', 2500000, 15);
const fixedExpenses = new MainCategory('Gastos fijos', 2500000, 30);
const mainCategories = new MainCategories([fun, fixedExpenses]);

mainCategories.validate();
