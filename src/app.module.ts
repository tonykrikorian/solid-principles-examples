/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import AbstractionModule from './modules/abstraction/abstraction.module';
import BeerModule from './modules/beer/beer.module';
import DesignPatternsModule from './modules/designPatterns/designPatterns.module';

@Module({
  imports: [BeerModule, DesignPatternsModule, AbstractionModule],
})
export class AppModule {}
