import {NestFactory} from '@nestjs/core';

import {AppModule} from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'feed-materializer',
        brokers: ['localhost:9092'],
      },
      subscribe: {
        fromBeginning: true,
      },
      consumer: {
        groupId: 'feed-materializer',
      }
    }
  });

  app.listen();
}

bootstrap().then();