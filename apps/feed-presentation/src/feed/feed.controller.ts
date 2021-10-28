import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FeedService } from './feed.service';
import { FeedDto } from './feed-dto';



@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Get(':profileId')
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: FeedDto,
  })
  @ApiOperation({ operationId: 'getFeed', summary: 'Get Feed' })
  async findAll(@Param('profileId') profileId: string): Promise<FeedDto> {
    console.log('SSSSDDDDDDDD: ', profileId);
    return await this.feedService.findAll(profileId)
  }
}
