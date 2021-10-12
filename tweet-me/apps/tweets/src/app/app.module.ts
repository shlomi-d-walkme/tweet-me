import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Tweets } from './controllers/tweets.controller';

@Module({
  imports: [],
  controllers: [AppController, Tweets],
  providers: [AppService],
})
export class AppModule {}
