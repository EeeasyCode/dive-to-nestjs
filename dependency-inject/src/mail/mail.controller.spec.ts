import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from './mail.controller';
import { Mail } from './mail';
import { mailProviders } from './senders/sender.provider';

describe('MailController', () => {
  let controller: MailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailController],
      providers: [Mail, ...mailProviders],
    }).compile();

    controller = module.get<MailController>(MailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return "Google"', () => {
    expect(controller.sendGmail()).toBe('Google');
  });

  it('should return "Naver"', () => {
    expect(controller.sendNaver()).toBe('Naver');
  });

  it('should return "Daum"', () => {
    expect(controller.sendDaum()).toBe('Daum');
  });
});
