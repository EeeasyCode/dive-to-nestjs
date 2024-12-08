import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
export class AppServiceImpl implements AppService {
  getHi(): string {
    return 'hi';
  }

  getHello(): string {
    return 'Hello World!';
  }
}
