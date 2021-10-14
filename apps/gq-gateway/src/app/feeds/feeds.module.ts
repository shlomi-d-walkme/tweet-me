import { Module } from '@nestjs/common';
import { FeedsResolver } from './feeds.resolver';

@Module({
  providers:[FeedsResolver],
  exports:[]
})
export class FeedsModule {}