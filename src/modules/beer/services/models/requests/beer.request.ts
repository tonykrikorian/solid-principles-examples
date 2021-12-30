/* eslint-disable prettier/prettier */
import { IsString } from 'class-validator';

export class BeerRequest {
  @IsString()
  name: string;

  @IsString()
  brand: string;
}
