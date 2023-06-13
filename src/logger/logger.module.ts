import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Log } from './entities/log.entity';
import { LogsService } from './services/logs.service';
import { LogController } from './log.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Log])],
  providers: [LogsService],
  exports: [TypeOrmModule, LogsService],
  controllers: [LogController],
})
export class LoggerModule {}
