import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerService } from '@tweet-me/logger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
              private logger: LoggerService) {
    setInterval(this.log.bind(this), 5000);
  }

  @Get()
  getData() {
    return this.appService.getData();
  }

  private log() {
    this.logger.info('I\'m logged every 5 seconds', { userId: 123456, time: new Date().toString() });
  }
}
