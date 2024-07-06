import { contributors, todos } from './data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object[] {
    return [{
      contributors,
      todos,
    }];
  }
}
