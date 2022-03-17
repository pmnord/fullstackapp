import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'You pinged the NestJs backend for carenexis-db\n';
  }
}
