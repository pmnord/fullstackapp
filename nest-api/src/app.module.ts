import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { ConcernController } from './concern/concern.controller';
import { DemoModule } from './demo/demo.module';

@Module({
  imports: [DemoModule],
  controllers: [
    AdminController,
    AppController,
    CatsController,
    ConcernController,
  ],
  providers: [AppService, CatsService],
})
export class AppModule {}
