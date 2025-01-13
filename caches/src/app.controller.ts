import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheInterceptor, CacheKey, CacheTTL } from '@nestjs/cache-manager';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CacheKey('hello') // custom cache key
  @CacheTTL(30) // override TTL to 30 seconds for this route
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('time')
  @CacheKey('current-time')
  getCurrentTime(): string {
    return new Date().toISOString();
  }
}
