import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tweets } from './controllers/tweets.controller';
import { TweetsRepo } from './repo/tweets.repo';
import { MessangerService } from './services/messanger/messanger.service';
import {MessagingService} from '@tweet-me/shared/kafka-infra';



@Module({
  imports: [MessagingService],
  controllers: [AppController, Tweets],
  providers: [AppService, TweetsRepo, MessangerService, MessagingService],
})
export class AppModule {}
