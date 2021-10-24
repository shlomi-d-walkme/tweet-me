import { Module } from '@nestjs/common';

import { FollowsController } from './controllers/follows.controller';
import { FollowsRepo } from './repo/follows.repo';
import { FollowsService } from './services/follows.service';
import { KafkaFollowsServerService } from './services/kafka-follows-server.service';

@Module({
  imports: [],
  controllers: [FollowsController],
  providers: [FollowsRepo, KafkaFollowsServerService, FollowsService],
})
export class AppModule {}
