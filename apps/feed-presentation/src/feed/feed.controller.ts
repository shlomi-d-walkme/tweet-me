import { Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FeedService } from './feed.service';
import { FeedDto } from './feed-dto';



@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Get()
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: FeedDto,
  })
  @ApiOperation({ operationId: 'getFeed', summary: 'Get Feed' })
  async findAll(): Promise<FeedDto> {
    return await this.feedService.findAll()
  }

  @Post()
  @ApiOkResponse({
    description: 'The record has been successfully created.',
    type: FeedDto,
  })
  @ApiOperation({ operationId: 'feed', summary: 'Feed feed' })
  async feed(): Promise<void> {
    await this.feedService.seed('Moshe');
  }
}
