import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { TweetsController } from './controllers/tweetsListener.controller';
import { FollowersController } from './controllers/followersListener.controller';

import { AppService } from './app.service';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [AppController, TweetsController, FollowersController],
  providers: [AppService],
})
export class AppModule {}
