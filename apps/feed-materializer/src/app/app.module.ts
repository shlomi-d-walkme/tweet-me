import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TweetsController } from './controllers/tweetsListener.controller';
import { FollowersController } from './controllers/followersListener.controller';
import {FeedModelModule} from '@tweet-me/feed-model'
import { AppService } from './app.service';

@Module({
  imports: [FeedModelModule],
  controllers: [AppController, TweetsController, FollowersController],
  providers: [AppService],
})
export class AppModule {}
