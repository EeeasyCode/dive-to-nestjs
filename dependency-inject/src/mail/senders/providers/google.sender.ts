import { MailSender } from '../sender.interface';

export class GoogleMailSender implements MailSender {
  send(): string {
    return 'Google';
  }
}
