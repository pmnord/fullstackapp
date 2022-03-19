import { Injectable } from '@nestjs/common';
import { Plant } from './entities/plant.entity';

@Injectable()
export class PlantsService {
  private readonly plants: Plant[] = [
    {
      id: '1',
      commonNames: [
        'daisy',
        'perennial daisy',
        'lawn daisy',
        'common daisy',
        'English daisy',
      ],
      species: 'Bellis perennis',
      genus: 'Bellis',
      family: 'Asteraceae',
    },
  ];

  findAll(): Plant[] {
    return this.plants;
  }

  findOne(id: string) {
    return this.plants.find((plant) => plant.id === id);
  }
}
