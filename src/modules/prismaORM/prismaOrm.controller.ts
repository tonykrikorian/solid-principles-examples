/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import PrismaService from 'src/prisma.service';
import { AddCategoryRequest } from './services/models/requests/addCategorie.request';
import { AddExpenseCategoryRequest } from './services/models/requests/addExpenseCategory.request';
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

  @Post('add-category-expense')
  public async addCategoryExpense(@Body() body: AddExpenseCategoryRequest) {
    const { salary, id } = await this.prismaService.period.findFirst({
      where: { period: body.period },
    });
    const finalAmmount = await this.calculateExpenseCategoryAmmount(
      body.salaryPercentage,
      salary,
    );

    return this.prismaService.expenseCategory.create({
      data: {
        salaryPercentage: body.salaryPercentage,
        ammount: finalAmmount,
        periods: {
          create: [
            {
              periodId: id,
            },
          ],
        },
      },
    });
  }

  private async calculateExpenseCategoryAmmount(
    percentage: number,
    salary: number,
  ): Promise<number> {
    const finalAmmount = Number(salary) * (percentage / 100);
    return finalAmmount;
  }
}
