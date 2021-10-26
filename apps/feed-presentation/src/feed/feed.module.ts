import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { FeedModel} from '@tweet-me/feed-model'

@Module({
  imports: [FeedModel],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
