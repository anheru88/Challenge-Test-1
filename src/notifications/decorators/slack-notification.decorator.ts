import { NotificationDecoratorInterface } from './interfaces/notification-decorator.interface';
import { CreateMessageDTO } from '../../message/dto/create-message.dto';
import { User } from '../../users/entities/user.entity';
import { LogsService } from '../../logger/services/logs.service';

export class SlackNotificationDecorator
  implements NotificationDecoratorInterface
{
  constructor(
    private notification: NotificationDecoratorInterface,
    private CreateMessageDTO: CreateMessageDTO,
    private User: User,
    private readonly logsService: LogsService,
  ) {}

  notify(): void {
    const { message, category } = this.CreateMessageDTO;
    const notificationType = 'Slack Notification';
    const userInfo = JSON.stringify(this.User);

    this.logsService.logRepository.save({
      category,
      message,
      notificationType,
      userInfo,
    });

    this.notification.notify();
  }
}
