/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { IRepository } from '../../interfaces/repository.interface';
import { Account } from '../entities/account';
import { Person } from '../entities/person.entity';

export default abstract class AbstractAccountDeposit {
  constructor(
    private readonly personRepository: IRepository<Person>,
    private readonly accountRepository: IRepository<Account>,
  ) {}
  protected abstract depositIntoAccount();

  public deposit() {
    const accountInformation = this.accountRepository.getAllData();
    const userAccountInformation = this.personRepository.getById();

    this.depositIntoAccount();
  }
}
