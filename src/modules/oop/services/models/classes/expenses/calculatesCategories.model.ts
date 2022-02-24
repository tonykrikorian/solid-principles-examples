/* eslint-disable prettier/prettier */
import MainCategory from './mainCategory.model';

export default class CalculatesCategories {
  constructor(private readonly categories: MainCategory[]) {}

  public arePercentagesGraterThan100Percent() {
    const percentages = this.totalPercentage();
    if (percentages > 100)
      return {
        totalPercentage: `${percentages}%`,
        message: 'El porcentaje total es mayor al 100%',
        status: false,
      };

    return {
      totalPercentage: `${percentages}%`,
      message: 'Ok',
      status: true,
    };
  }
  private totalPercentage() {
    return this.categories
      .map((x) => x.percentage)
      .reduce((prev, current) => prev + current);
  }

  public isAmmountGraterThanSalary() {
    const salary = this.categories[0].salary;
    const totalAmmount = this.totalAmmount();
    if (totalAmmount > salary)
      return {
        totalAmmount: `${totalAmmount}CLP`,
        message: 'Los montos mensuales son mayores al salario',
        status: false,
      };

    return {
      totalAmmount: `${totalAmmount}CLP`,
      message: 'Ok',
      status: true,
    };
  }

  private totalAmmount() {
    return this.categories
      .map((x) => x.theoricalAmmount)
      .reduce((prev, current) => prev + current);
  }
}
