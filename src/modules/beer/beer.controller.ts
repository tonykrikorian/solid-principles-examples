/* eslint-disable prettier/prettier */
import { Body, Controller } from '@nestjs/common';
import { BeerRequest } from './services/models/requests/beer.request';

@Controller('beer')
export default class BeerController {
  public add(@Body() body: BeerRequest) {
    return body;
  }
}
