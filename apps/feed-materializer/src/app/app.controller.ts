import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { FeedTweetModel } from './entities/feedTweet.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
}
