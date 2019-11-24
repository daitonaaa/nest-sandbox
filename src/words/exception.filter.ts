import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
import { Response, Request } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();
    const res = ctx.getResponse<Response>();
    const status = exception.getStatus();

    res
      .status(status)
      .json({
        path: req.url,
        statusCode: status,
        timestamp: new Date().toISOString(),
      });
  }
}
