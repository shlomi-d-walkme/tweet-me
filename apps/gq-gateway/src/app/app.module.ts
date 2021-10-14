import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FollowsModule } from './follows/follows.module';

@Module({
  imports: [
    FollowsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'generated/schema.gql'),
      sortSchema: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
