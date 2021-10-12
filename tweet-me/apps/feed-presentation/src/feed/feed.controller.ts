import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FeedDto } from './feed-dto';

@Controller('feed')
export class FeedController {
    @Get()
    @ApiOkResponse({ description: 'The record has been successfully created.', type: FeedDto})
    @ApiOperation({operationId: 'getFeed', summary: 'Get Feed'}) 
    findAll() {
    return new FeedDto();
  }
}
