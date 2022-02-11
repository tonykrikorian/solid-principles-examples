/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import PrismaService from 'src/prisma.service';
import PrismaOrmController from './prismaOrm.controller';

@Module({
  providers: [PrismaService],
  controllers: [PrismaOrmController],
})
export default class PrismaOrmModule {}
