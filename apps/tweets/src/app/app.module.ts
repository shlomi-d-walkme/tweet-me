import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tweets } from './controllers/tweets.controller';
import { TweetsRepo } from './repo/tweets.repo';

@Module({
  imports: [],
  controllers: [AppController, Tweets],
  providers: [AppService, TweetsRepo],
})
export class AppModule {}
