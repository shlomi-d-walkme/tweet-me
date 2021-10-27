import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from '@tweet-me/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private logger: LoggerService) {
    logger.info('hello world', { userId: 123456 });
  }

  @Get()
  getData() {
    return this.appService.getData();
  }
}
