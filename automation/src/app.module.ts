import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceImpl } from './app.service-impl';
import { AutomationModule } from './automations/automation.module';

@Module({
  imports: [AutomationModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_SERVICE',
      useClass: AppServiceImpl,
    },
  ],
})
export class AppModule {}
