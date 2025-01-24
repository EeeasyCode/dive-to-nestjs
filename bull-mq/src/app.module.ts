import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenerateReportController } from './generate-report/generate-report.controller';
import { BullModule } from '@nestjs/bull';
import { GenerateReportProducer } from './generate-report/generate-report.producer';
import { GenerateReportConsumer } from './generate-report/generate-report.consumer';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'generate-report-queue',
      defaultJobOptions: {
        attempts: 2,
      },
    }),
  ],
  controllers: [AppController, GenerateReportController],
  providers: [AppService, GenerateReportProducer, GenerateReportConsumer],
})
export class AppModule {}
