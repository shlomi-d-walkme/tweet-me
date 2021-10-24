import { Module } from '@nestjs/common';

import { FollowsController } from './controllers/follows.controller';
import { FollowsRepo } from './repo/follows.repo';
import { FollowsMessageProvider } from './services/follows-message-provider.service';
import { KafkaFollowsServerService } from './services/kafka-follows-server.service';

@Module({
  imports: [],
  controllers: [FollowsController],
  providers: [FollowsRepo, KafkaFollowsServerService, FollowsMessageProvider],
})
export class AppModule {}
