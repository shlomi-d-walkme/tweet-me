import { Module } from '@nestjs/common';
import { FeedDbService } from '../feed-db/feed-db.service';


@Module({
	controllers: [],
	providers: [],
	exports: [FeedDbService],
})
export class FeedModelModule {}    


