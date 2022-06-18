/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import AbstractionController from './abstraction.controller';
import CurrentAccountDeposit from './services/models/classes/currentAccount';
import SavingsAccountDeposit from './services/models/classes/savingsAccount';
import { Account } from './services/models/entities/account';
import { Person } from './services/models/entities/person.entity';
import DatabaseRepository from './services/repositories/database.repository';
import WebServicesRepository from './services/repositories/webServices.repository';

const repositories = [DatabaseRepository, WebServicesRepository];
@Module({
  imports: [],
  controllers: [AbstractionController],
  providers: [
    ...repositories,
    {
      provide: 'SavingsAccount',
      useFactory: (
        dataBaseRepository: DatabaseRepository<Person>,
        dataBaseRepository2: DatabaseRepository<Account>,
      ) => {
        return new SavingsAccountDeposit(
          dataBaseRepository,
          dataBaseRepository2,
        );
      },
      inject: [DatabaseRepository, DatabaseRepository],
    },
    {
      provide: 'CurrentAccount',
      useFactory: (
        dataBaseRepository: DatabaseRepository<Person>,
        webService: WebServicesRepository<Account>,
      ) => {
        return new CurrentAccountDeposit(dataBaseRepository, webService);
      },
      inject: [DatabaseRepository, WebServicesRepository],
    },
  ],
})
export default class AbstractionModule {}
