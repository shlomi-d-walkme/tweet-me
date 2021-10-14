import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';
import { FollowsModule } from './follows/follows.module';
import { TweetsModule } from './tweets/tweets.module';

@Module({
  imports: [
    FollowsModule,
    FeedsModule,
    TweetsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'generated/schema.gql'),
      sortSchema: true,
    }),
    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
