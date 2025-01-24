import { Body, Controller, Post } from '@nestjs/common';
import { GenerateReportProducer } from './generate-report.producer';

@Controller('generate-report')
export class GenerateReportController {
  constructor(private generateReportProducer: GenerateReportProducer) {}
  @Post()
  async generateReport(@Body() body: any) {
    this.generateReportProducer.generateReport(body);
    return body;
  }
}
