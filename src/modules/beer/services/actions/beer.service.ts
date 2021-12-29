/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import Log from '../log/log';
import { BeerRequest } from '../models/requests/beer.request';
import BeerRepository from '../repositories/beer.repository';

@Injectable()
export default class BeerService {
  constructor(
    private readonly beerRepository: BeerRepository,
    private readonly logService: Log,
  ) {}
  public async create(beer: BeerRequest) {
    this.beerRepository.save(beer);
    await this.logService.save(`Se guarda cerveza ${beer.name}`);
  }
}
