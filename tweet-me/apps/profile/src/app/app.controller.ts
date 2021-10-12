import { Body, Controller, Get, Header, HttpCode, Param, Post, Res } from '@nestjs/common';
import { ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { ProfileDto } from './dto/profile.dts';
import { Profile } from './entities/profile.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  @ApiOperation({ summary: 'register a new twitter profile.', operationId: 'register' })
  @ApiResponse({ status: 201, description: 'profile created succsesfully.' })
  @HttpCode(201)
  register(@Body() profileDto: ProfileDto) {
     this.appService.register(profileDto);
     return 'ok';
  }

  @Get('profiles')
  @ApiOperation({ summary: 'return all avilable profiles.', operationId: 'getProfiles' })
  @ApiResponse({ status: 200, description: 'list of all avilable profiles.'})
  getProfiles(): Profile[] {
    return this.appService.getProfiles();
  }

  @Get('profile/:id')
  @ApiOperation({ summary: 'profile of a given user by id', operationId: 'getProfile' })
  @ApiResponse({ status: 200, description: 'returns a profile.', type: Profile})
  getProfile(@Param('id') id :string): Profile {
    return this.appService.getProfile(id);
  }

  @Get('omry')
  @Header('content-type', 'text/plain')
  @ApiOperation({ summary: 'sqwagger' })
  @ApiResponse({ status: 200, description: 'returns a profile.'})
  getSwagger() {
    return this.appService.getArt();
  }
}
