import { Module } from '@nestjs/common';

import { FollowsController } from './controllers/follows.controller';

@Module({
  imports: [],
  controllers: [FollowsController],
  providers: [],
})
export class AppModule {}
