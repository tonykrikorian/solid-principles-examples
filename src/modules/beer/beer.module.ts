/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import BeerController from './beer.controller';
import BeerService from './services/actions/beer.service';
import Log from './services/log/log';
import BeerRepository from './services/repositories/beer.repository';

@Module({
  controllers: [BeerController],
  providers: [BeerService, BeerRepository, Log],
})
export default class BeerModule {}
