import {Inject, Injectable} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import tracer from 'dd-trace'

@Injectable()
export class LoggerService {

    constructor (@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,) {
    }

    info (message: string, args: Record<string, unknown>): void {
        this.logger.info(message, { ...args, currentTraceId: this.getCurrentTraceId() });
    }

    error (message: string, args: Record<string, unknown>): void {
        this.logger.error(message, { ...args, currentTraceId: this.getCurrentTraceId()  });
    }

    debug (message: string, args: Record<string, unknown>): void {
        this.logger.debug(message, { ...args, currentTraceId: this.getCurrentTraceId()  });
    }

    private getCurrentTraceId(): string {
        return tracer.scope().active() && tracer.scope().active().context().toTraceId();
    }
} 