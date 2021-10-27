import {Inject, Injectable} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class LoggerService {

    constructor (@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,) {
    }

    info (message: string, args: Record<string, unknown>): void {
        this.logger.info(message, { ...args });
    }

    error (message: string, args: Record<string, unknown>): void {
        this.logger.error(message, { ...args });
    }

    debug (message: string, args: Record<string, unknown>): void {
        this.logger.debug(message, { ...args });
    }
}