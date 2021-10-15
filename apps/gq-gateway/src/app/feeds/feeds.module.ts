import { Module } from '@nestjs/common';
import { FeedsResolver } from './feeds.resolver';
import { FeedsService } from './feeds.service';

@Module({
  providers:[FeedsResolver, FeedsService],
  exports:[]
})
export class FeedsModule {}