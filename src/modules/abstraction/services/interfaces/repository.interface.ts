/* eslint-disable prettier/prettier */
export interface IRepository<T> {
  getAllData(): T[];
  getById(): T;
  record(): void;
  delete(): void;
}
