import { Inject, Injectable } from '@nestjs/common';
import { MailSender } from './senders/sender.interface';

@Injectable()
export class Mail {
  constructor(
    @Inject('GOOGLE_SENDER') private readonly googleSender: MailSender,
    @Inject('NAVER_SENDER') private readonly naverSender: MailSender,
    @Inject('DAUM_SENDER') private readonly daumeSender: MailSender,
  ) {}

  sendGmail(): string {
    return this.googleSender.send();
  }

  sendNaver(): string {
    return this.naverSender.send();
  }

  sendDaum(): string {
    return this.daumeSender.send();
  }
}
