import { Module } from '@nestjs/common';


import {FeedModel} from '@tweet-me/feed-model'
import { FeedService } from './services/feed.service';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Module({
  imports: [FeedModel, MessagingService],
  controllers: [],
  providers: [FeedService, MessagingService],
})
export class AppModule {}
