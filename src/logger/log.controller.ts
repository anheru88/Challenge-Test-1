import { Controller, Get } from '@nestjs/common';
import { LogsService } from './services/logs.service';

@Controller('logs')
export class LogController {
  constructor(private readonly logsService: LogsService) {}

  @Get()
  getAllCategories() {
    return this.logsService.logRepository.find({
      order: { createdAt: 'DESC' },
      take: 20,
    });
  }
}
