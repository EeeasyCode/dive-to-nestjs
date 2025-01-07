import { MailSender } from '../sender.interface';

export class NaverMailSender implements MailSender {
  send(): string {
    return 'Naver';
  }
}
