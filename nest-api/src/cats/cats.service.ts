import { Injectable } from '@nestjs/common/decorators';
import { Cat } from './interfaces/cat.interface';

/**
 * This service/provider is responsible for data storage and retrieval
 */
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
