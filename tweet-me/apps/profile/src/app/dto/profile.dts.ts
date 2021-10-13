import { IsDateString, IsInt, IsString } from 'class-validator';

export class ProfileDto {

  constructor(email: string,firstName: string,lastName: string,passward: string,userName: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.passward = passward;
    this.userName = userName;
  }
  
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