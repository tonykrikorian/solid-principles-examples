import { Module } from '@nestjs/common';
import BeerModule from './modules/beer/beer.module';
import PoliciesModule from './modules/policies/policies.module';

@Module({
  imports: [BeerModule, PoliciesModule],
})
export class AppModule {}
