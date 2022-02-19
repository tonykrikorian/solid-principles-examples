/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import BeerModule from './modules/beer/beer.module';
import OopModule from './modules/oop/oop.module';
import PrismaOrmModule from './modules/prismaORM/prismaOrm.module';

@Module({
  imports: [BeerModule, PrismaOrmModule, OopModule],
})
export class AppModule {}
