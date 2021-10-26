import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import { FeedService } from './app/services/feed.service';



async function bootstrap() {

  const app = await NestFactory.createApplicationContext(AppModule);
  
  const appService = app.get(FeedService);
  appService.consume();
}

bootstrap().then();

