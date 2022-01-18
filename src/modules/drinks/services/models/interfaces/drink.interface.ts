/* eslint-disable prettier/prettier */
export interface IDrink {
  name: string;
  price: number;
  invoice: number;
  getPrice: () => number;
}
