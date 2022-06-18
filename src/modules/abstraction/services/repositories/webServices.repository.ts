/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { IRepository } from '../interfaces/repository.interface';

@Injectable()
export default class WebServicesRepository<T> implements IRepository<T> {
  getAllData(): T[] {
    throw new Error('Method not implemented.');
  }
  getById(): T {
    throw new Error('Method not implemented.');
  }
  record(): void {
    throw new Error('Method not implemented.');
  }
  delete(): void {
    throw new Error('Method not implemented.');
  }
}
