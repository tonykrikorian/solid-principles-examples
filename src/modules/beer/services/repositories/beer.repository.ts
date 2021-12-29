/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { BeerRequest } from '../models/requests/beer.request';

@Injectable()
export default class BeerRepository {
  public save(beer: BeerRequest): void {
    console.log(`Guardado en la base de datos ${beer.name}`);
  }
}
