import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogsService } from './logs.service';
import { Log } from '../entities/log.entity';

describe('LogsService', () => {
  let service: LogsService;
  let repository: Repository<Log>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LogsService,
        {
          provide: getRepositoryToken(Log),
          useClass: Repository, // Use the real repository or a mock repository
        },
      ],
    }).compile();

    service = module.get<LogsService>(LogsService);
    repository = module.get<Repository<Log>>(getRepositoryToken(Log));
  });

  describe('createLog', () => {
    it('should create a new log', async () => {
      const logData = {
        category: 'Business',
        message: 'This is a message to send in Business category',
        notificationType: 'Slack Notification',
        userInfo: 'User Information in Json Format',
      };

      const createdLog: Log = {
        id: 'uuid',
        category: 'Business',
        message: 'This is a message to send in Business category',
        notificationType: 'Slack Notification',
        userInfo: 'User Information in Json Format',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(repository, 'save').mockResolvedValue(createdLog);

      const result = await service.logRepository.save(logData);

      expect(repository.save).toHaveBeenCalledWith(logData);
      expect(result).toBe(createdLog);
    });
  });
});
