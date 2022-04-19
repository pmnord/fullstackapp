import { Injectable } from '@nestjs/common';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  private readonly plants: Plant[] = [
    {
      id: 1,
      name: 'Monstera',
      slug: 'monstera',
      scientificName: '',
      difficulty: '',
      image: '/images/plants/monstera/1.jpg',
      description: '',
    },
  ];

  findAll(): Plant[] {
    return this.plants;
  }

  findOne(id: number) {
    return this.plants.find((plant) => plant.id === id);
  }
}
