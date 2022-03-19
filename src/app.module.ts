/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import BeerModule from './modules/beer/beer.module';
import DesignPatternsModule from './modules/designPatterns/designPatterns.module';

@Module({
  imports: [BeerModule, DesignPatternsModule],
})
export class AppModule {}
