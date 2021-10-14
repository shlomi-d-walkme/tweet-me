import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common";
import { Request, Response } from 'express';
import {MongoServerError} from 'mongodb';

@Catch(MongoServerError)
export class DtoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoServerError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.error('info ' + exception.errmsg)

    response
      .status(400)
      .json({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.errmsg
      });
  }
}