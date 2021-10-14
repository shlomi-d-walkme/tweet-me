import { Body, Controller, Get, Header, HttpCode, Param, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { ProfileRequest } from './dto/ProfileReqest.dto';
import { ProfileResponse } from './dto/ProfileResponse.dto';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  @ApiOperation({ summary: 'register a new twitter profile.', operationId: 'register' })
  @ApiOkResponse({ status: 201, description: 'profile created succsesfully.', type: ProfileResponse })
  // @HttpCode(201)
  register(@Body() profileDto: ProfileRequest) {
     return this.appService.register(profileDto);
  }

  @Get('profiles')
  @ApiOperation({ summary: 'return all avilable profiles.', operationId: 'getProfiles' })
  @ApiResponse({ status: 200, description: 'list of all avilable profiles.', type: [ProfileResponse]})
  getProfiles() {
    return this.appService.getProfiles();
  }

  @Get('profiles/:id')
  @ApiOperation({ summary: 'profile of a given user by id', operationId: 'getProfile' })
  @ApiResponse({ status: 200, description: 'returns a profile.', type: ProfileResponse})
  getProfile(@Param('id') id :string) {
    return this.appService.getProfile(id);
  }
}
