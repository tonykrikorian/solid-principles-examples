/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import PrismaService from 'src/prisma.service';

@Injectable()
export default class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  public getAllUsers() {
    return this.prismaService.user.findMany({ where: { id: 12 } });
  }
}
