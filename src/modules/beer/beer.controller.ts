/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import BeerService from './services/actions/beer.service';
import { BeerRequest } from './services/models/requests/beer.request';

@Controller('beer')
export default class BeerController {
  constructor(private readonly beerService: BeerService) {}
  public add(@Body() body: BeerRequest) {
    this.beerService.create(body);
    return body;
  }
}
