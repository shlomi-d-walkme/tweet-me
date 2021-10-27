import { Module } from '@nestjs/common';
import {LoggerService} from "./logger.service";
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
	imports: [
		WinstonModule.forRoot({
			transports: [
				new winston.transports.File({
					filename: `${process.env.PWD}/logs/${process.env.SERVICE_NAME}.log`
				}),
			]})
	],
	controllers: [],
	providers: [LoggerService],
	exports: [LoggerService],
})

export class LoggerModule {}
