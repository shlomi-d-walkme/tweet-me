import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class ProfileDto {

  constructor(email: string,firstName: string,lastName: string,passward: string,userName: string) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = passward;
    this.userName = userName;
  }
  
  @IsString()
  @ApiProperty()
  readonly userName: string;

  @IsString()
  @ApiProperty()
  readonly firstName: string;

  @IsString()
  @ApiProperty()
  readonly lastName: string;

  @IsString()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @ApiProperty()
  readonly email: string;
}