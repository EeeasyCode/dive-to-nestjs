import { MailSender } from '../sender.interface';

export class DaumMailSender implements MailSender {
  send(): string {
    return 'Daum';
  }
}
