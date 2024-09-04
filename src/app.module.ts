import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppServiceImpl } from './app.service-impl';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [AppController],
  providers: [
    {
      provide: 'APP_SERVICE',
      useClass: AppServiceImpl,
    },
  ],
})
export class AppModule {}
