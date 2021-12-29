/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';

@Injectable()
export default class Log {
  public async save(message: string): Promise<void> {
    await writeFile('./log.txt', message, { encoding: 'utf-8' });
  }
}
