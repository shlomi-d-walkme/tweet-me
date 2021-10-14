import { Module } from '@nestjs/common';
import { TweetsResolver } from './tweets.resolver';

@Module({
  providers: [TweetsResolver]
})
export class TweetsModule {}
