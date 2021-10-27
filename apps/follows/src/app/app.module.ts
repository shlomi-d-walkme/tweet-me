import { Module } from '@nestjs/common';
import { MessagingService } from '@tweet-me/shared/kafka-infra';

import { FollowsController } from './controllers/follows.controller';
import { DbModule } from './db/db.module';
import { FollowsRepo } from './repo/follows.repo';
import { FollowsMessageProvider } from './services/follows-message-provider.service';
import { KafkaFollowsServerService } from './services/kafka-follows-server.service';

@Module({
  imports: [DbModule],
  controllers: [FollowsController],
  providers: [FollowsRepo, KafkaFollowsServerService, FollowsMessageProvider, MessagingService],
})
export class AppModule {}
