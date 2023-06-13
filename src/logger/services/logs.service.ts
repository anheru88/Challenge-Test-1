import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Log } from '../entities/log.entity';

/**
 * In this class
 */
@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    public readonly logRepository: Repository<Log>,
  ) {}
}
