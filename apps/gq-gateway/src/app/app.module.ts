import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedsModule } from './feeds/feeds.module';

@Module({
  imports: [
    FeedsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    FeedsModule,
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
