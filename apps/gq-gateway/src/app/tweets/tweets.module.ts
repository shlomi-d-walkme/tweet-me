import { Module } from '@nestjs/common';
import { TweetsResolver } from './tweets.resolver';
import { TweetsService } from './tweets.service';

@Module({
  providers: [TweetsResolver, TweetsService]
})
export class TweetsModule {}
