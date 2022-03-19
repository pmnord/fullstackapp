import { Module } from '@nestjs/common';
import { AdminController } from './admin/admin.controller';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { DemoModule } from './demo/demo.module';
import { PlantsModule } from './plants/plants.module';

@Module({
  imports: [DemoModule, PlantsModule],
  controllers: [AdminController, AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
