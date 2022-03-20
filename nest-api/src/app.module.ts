import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AdminController } from './admin/admin.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { DemoModule } from './demo/demo.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [DemoModule, PlantsModule, ConfigModule.forRoot()],
  controllers: [AdminController, AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ method: RequestMethod.ALL, path: '*' });
  }
}
