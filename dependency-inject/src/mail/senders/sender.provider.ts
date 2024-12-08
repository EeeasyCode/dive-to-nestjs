import { DaumMailSender } from './providers/daum.sender';
import { GoogleMailSender } from './providers/google.sender';
import { NaverMailSender } from './providers/naver.sender';

export const mailProviders = [
  {
    provide: 'GOOGLE_SENDER',
    useClass: GoogleMailSender,
  },
  {
    provide: 'NAVER_SENDER',
    useClass: NaverMailSender,
  },
  {
    provide: 'DAUM_SENDER',
    useClass: DaumMailSender,
  },
];
