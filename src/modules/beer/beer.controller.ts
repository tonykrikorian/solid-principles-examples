/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import BeerService from './services/actions/beer.service';
import ValidationPipe from './services/models/pipes/validation.pipe';
import { BeerRequest } from './services/models/requests/beer.request';

@Controller('beer')
export default class BeerController {
  constructor(private readonly beerService: BeerService) {}

  @Post('create')
  public add(@Body(new ValidationPipe()) body: BeerRequest) {
    this.beerService.create(body);
    return body;
  }
}
