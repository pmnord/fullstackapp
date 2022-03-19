import { Controller, Get, Param } from '@nestjs/common';
import { Plant } from './entities/plant.entity';
import { PlantsService } from './plants.service';

@Controller('plants')
export class PlantsController {
  constructor(private plantsService: PlantsService) {}

  @Get(':id')
  findOne(@Param() params: { id: string }): Plant {
    return this.plantsService.findOne(params.id);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.plantsService.findAll();
  }
}
