import { Module } from '@nestjs/common';
import {LoggerService} from "./logger.service";
import {
	utilities as nestWinstonModuleUtilities,
	WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

@Module({
	imports: [
		WinstonModule.forRoot({
			transports: [
				new winston.transports.File({ filename: `${process.env.PWD}/logs/winston_logs.log` }),
				// new winston.transports.Console({
				// 	format: winston.format.combine(
				// 		winston.format.timestamp(),
				// 		nestWinstonModuleUtilities.format.nestLike(),
				// 	),
				// })
			]})
	],
	controllers: [],
	providers: [LoggerService],
	exports: [LoggerService],
})

export class LoggerModule {}
