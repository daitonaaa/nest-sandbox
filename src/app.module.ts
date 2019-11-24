import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { WordsModule } from './words/words.module';
import { LoggerMiddleware } from './logger.middleware';
import { WordsController } from './words/words.controller';

@Module({
  imports: [WordsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(WordsController);
  }
}
