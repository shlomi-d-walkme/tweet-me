import { Module } from '@nestjs/common';
import { LoggerModule } from '@tweet-me/logger';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tweets } from './controllers/tweets.controller';
import { TweetsRepo } from './repo/tweets.repo';
import { MessangerService } from './services/messanger/messanger.service';
import {MessagingService} from '@tweet-me/shared/kafka-infra';
import { DbModule } from './db/db.module';



@Module({
  imports: [MessagingService, DbModule, LoggerModule],
  controllers: [AppController, Tweets],
  providers: [AppService, TweetsRepo, MessangerService, MessagingService],
})
export class AppModule {}
