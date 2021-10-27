import { Module } from '@nestjs/common';


import {FeedModel} from '@tweet-me/feed-model'
import { FeedService } from './services/feed.service';
import {MessagingService} from '@tweet-me/shared/kafka-infra';
import { TweetService } from './services/tweet.service';
import { FollowService } from './services/follow.service';


@Module({
  imports: [FeedModel, MessagingService],
  controllers: [],
  providers: [FeedService, MessagingService, TweetService, FollowService],
})
export class AppModule {}
