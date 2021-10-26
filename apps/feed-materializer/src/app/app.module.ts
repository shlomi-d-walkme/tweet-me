import { Module } from '@nestjs/common';

import { AppController } from './app.controller';


import {FeedModel} from '@tweet-me/feed-model'
import { AppService } from './app.service';
import { FollowersController } from './controllers/followers.controller';
import { TweetsController } from './controllers/tweets.controller';

@Module({
  imports: [FeedModel],
  controllers: [AppController, TweetsController, FollowersController],
  providers: [AppService],
})
export class AppModule {}
