
import { ApiProperty } from '@nestjs/swagger';
import { ProfileDto } from '../dto/profile.dts';

export class Profile {

    static convertToEntity(id: string, profileDto: ProfileDto){
        const profile = new Profile();
        profile.id = id;
        profile.creationDate=new Date().toUTCString();
        profile.email=profileDto.email;
        profile.firstName=profileDto.firstName;
        profile.lastName=profileDto.lastName;
        profile.passward=profileDto.password;
        profile.userName=profileDto.userName;
        return profile;
    }

    @ApiProperty({
      example: 'id',
      description: 'user id',
    })
    id: string;

    @ApiProperty({
        example: 'userName',
        description: 'user name',
      })
    userName: string;
  
    @ApiProperty({
        example: 'Maine',
        description: 'first name',
      })
    firstName: string;
  
    @ApiProperty({
        example: 'Coon',
        description: 'last name',
      })
    lastName: string;
  
  
    @ApiProperty({
        example: 'jhg$%^$',
        description: 'password',
      })
    passward: string;
  
    @ApiProperty({
        example: '2009-02-29',
        description: 'the date when the profile was created',
      })
    creationDate: string;
  
    @ApiProperty({
        example: 'Maine-Coon@walkme.com',
        description: 'user email',
      })
    email: string;

 
}