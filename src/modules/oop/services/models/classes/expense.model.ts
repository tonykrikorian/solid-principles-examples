/* eslint-disable prettier/prettier */
export default class Expense {
  constructor(public readonly ammount: number, public readonly title: string) {}

  public saveExpense() {
    const log = {
      id: Math.floor(Math.random()) + 1,
      ammount: `${this.ammount} CLP`,
      title: this.title,
      createdAt: new Date(),
    };

    console.log('Expense Added');
    console.log(log);
  }

  public convertInUSD() {
    const log = {
      id: Math.floor(Math.random()) + 1,
      ammount: `${this.ammount / 800} USD`,
      title: this.title,
      createdAt: new Date(),
    };

    console.log(log);
  }
}
