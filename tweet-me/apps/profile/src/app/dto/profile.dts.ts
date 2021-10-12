import { IsDateString, IsInt, IsString } from 'class-validator';

export class ProfileDto {
  @IsString()
  readonly userName: string;

  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly passward: string;

  @IsString()
  readonly email: string;
}