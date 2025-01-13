import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // Simulate a slow operation
    const start = Date.now();
    while (Date.now() - start < 1000) {
      // Wait for 1 second
    }
    return `Hello World! Generated at ${new Date().toISOString()}`;
  }
}
