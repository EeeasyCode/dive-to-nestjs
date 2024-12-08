import { Controller, Get } from '@nestjs/common';
import { Mail } from './mail';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: Mail) {}

  @Get('google')
  sendGmail(): string {
    return this.mailService.sendGmail();
  }

  @Get('naver')
  sendNaver(): string {
    return this.mailService.sendNaver();
  }

  @Get('daum')
  sendDaum(): string {
    return this.mailService.sendDaum();
  }
}
