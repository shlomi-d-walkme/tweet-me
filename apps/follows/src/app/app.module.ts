import { Module } from '@nestjs/common';

import { FollowsController } from './controllers/follows.controller';
import { FollowsRepo } from './repo/follows.repo';

@Module({
  imports: [],
  controllers: [FollowsController],
  providers: [FollowsRepo],
})
export class AppModule {}
