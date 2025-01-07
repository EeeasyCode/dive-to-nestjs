import { Body, Controller, Post } from '@nestjs/common';
import { AutomationSubscribeService } from './automation-subscribe.service';
import { AutomationSubscribeRequest } from './subscribe/dtos/automation-subscribe.request';

@Controller()
export class AutomationController {
  constructor(
    private readonly automationSubscribeService: AutomationSubscribeService,
  ) {}

  @Post('automation/subscribe')
  async automationSubscribeLetter(
    @Body() automationSubscribeRequest: AutomationSubscribeRequest,
  ) {
    const { domain, email, nickname } = automationSubscribeRequest;
    return await this.automationSubscribeService.subscribe(
      domain,
      email,
      nickname,
    );
  }
}
