/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import OopController from './oop.controller';

@Module({
  controllers: [OopController],
})
export default class OopModule {}
