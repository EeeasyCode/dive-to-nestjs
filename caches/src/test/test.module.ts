/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { TestService } from './test.service';

@Module({
  imports: [CacheModule.register({})],
  providers: [TestService],
})
class TestModule {}
