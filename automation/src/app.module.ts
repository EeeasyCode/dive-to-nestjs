import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceImpl } from './app.service-impl';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppServiceImpl],
})
export class AppModule {}
