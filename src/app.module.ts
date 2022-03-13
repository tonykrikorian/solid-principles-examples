/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import BeerModule from './modules/beer/beer.module';

@Module({
  imports: [BeerModule],
})
export class AppModule {}
