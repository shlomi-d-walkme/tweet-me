import { Module } from '@nestjs/common';
import { DbModule } from '../db/db/db.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
