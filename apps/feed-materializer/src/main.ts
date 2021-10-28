import "./app/services/tracer"; // must come before importing any instrumented module.
import {NestFactory} from '@nestjs/core';
import {AppModule} from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule);
  app.listen();
}

bootstrap().then();

