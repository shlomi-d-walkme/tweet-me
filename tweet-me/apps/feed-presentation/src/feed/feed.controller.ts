import { Controller, Get } from '@nestjs/common';
import { FeedDto } from '../feed-dto';

@Controller('feed')
export class FeedController {
    @Get()
    findAll(): FeedDto {
    return new FeedDto();
  }
}
