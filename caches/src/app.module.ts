import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    CacheModule.register({
      ttl: 5, // seconds
      max: 100, // maximum number of items in cache
    }),
    TestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
