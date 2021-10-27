import { Body, Controller, Get, Header, HttpCode, Param, Post, Res, UseFilters } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiProduces, ApiResponse } from '@nestjs/swagger';

import { AppService } from './app.service';
import { DtoExceptionFilter } from './dto/DtoException.filter';
import { ProfileRequest } from './dto/ProfileReqest.dto';
import { ProfileResponse } from './dto/ProfileResponse.dto';


@Controller('/profile')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  @ApiOperation({ summary: 'register a new twitter profile.', operationId: 'register' })
  @ApiOkResponse({ status: 201, description: 'profile created succsesfully.', type: ProfileResponse })
  @UseFilters(new DtoExceptionFilter())
  register(@Body() profileDto: ProfileRequest) {
     return this.appService.register(profileDto);
  }

  @Get()
  @ApiOperation({ summary: 'return all avilable profiles.', operationId: 'getProfiles' })
  @ApiResponse({ status: 200, description: 'list of all avilable profiles.', type: [ProfileResponse]})
  getProfiles() {
    return this.appService.getProfiles();
  }

  @Get('/:id')
  @ApiOperation({ summary: 'profile of a given user by id', operationId: 'getProfile' })
  @ApiResponse({ status: 200, description: 'returns a profile.', type: ProfileResponse})
  getProfile(@Param('id') id :string) {
    return this.appService.getProfile(id);
  }

  @Get('email/:email')
  @ApiOperation({ summary: 'profile of a given user by email', operationId: 'getProfileByEmail' })
  @ApiResponse({ status: 200, description: 'returns a profile.', type: ProfileResponse})
  getProfileByEmail(@Param('email') email :string) {
    return this.appService.getProfileByEmail(email);
  }
}
