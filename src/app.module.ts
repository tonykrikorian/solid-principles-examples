/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import BeerModule from './modules/beer/beer.module';
import PrismaOrmModule from './modules/prismaORM/prismaOrm.module';

@Module({
  imports: [BeerModule, PrismaOrmModule],
})
export class AppModule {}
