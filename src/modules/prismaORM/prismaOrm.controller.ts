/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import PrismaService from 'src/prisma.service';
import { AddCategoryRequest } from './services/models/requests/addCategorie.request';

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
}