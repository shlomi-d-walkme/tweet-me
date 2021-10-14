import { Module } from '@nestjs/common';

import { FeedModule } from '../feed/feed.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [FeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
