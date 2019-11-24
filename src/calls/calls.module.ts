import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { CallsController } from './calls.controller';
import { CallsService } from './calls.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [CallsController],
  providers: [CallsService],
})
export class CallsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(CallsController);
  }
}
