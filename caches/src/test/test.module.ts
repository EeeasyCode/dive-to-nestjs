/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  imports: [CacheModule.register({})],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
