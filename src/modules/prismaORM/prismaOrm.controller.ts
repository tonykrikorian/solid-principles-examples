/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import PrismaService from 'src/prisma.service';
import { AddCategoryRequest } from './services/models/requests/addCategorie.request';
import { AddPeriodRequest } from './services/models/requests/AddPeriod.request';

@Controller('database-example')
export default class PrismaOrmController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post('category')
  public addCategory(@Body() body: AddCategoryRequest) {
    return this.prismaService.category.create({
      data: {
        title: body.name,
      },
    });
  }

  @Post('add-period')
  public addPeriod(@Body() body: AddPeriodRequest) {
    return this.prismaService.period.create({
      data: {
        ...body,
      },
    });
  }
}
