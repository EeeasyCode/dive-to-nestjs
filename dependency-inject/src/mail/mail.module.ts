import { Module } from '@nestjs/common';
import { MailController } from './mail.controller';
import { Mail } from './mail';
import { mailProviders } from './senders/sender.provider';

@Module({
  imports: [],
  controllers: [MailController],
  providers: [Mail, ...mailProviders],
})
export class MailModule {}
