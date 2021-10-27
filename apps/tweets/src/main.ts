/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import "./app/services/tracer"; // must come before importing any instrumented module.
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 4444;


  const config = new DocumentBuilder()
    .setTitle('Tweets')
    .setDescription('Tweets API')
    .setVersion('1.0')
    .addTag('tweets')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();


