import { NotificationDecoratorInterface } from './interfaces/notification-decorator.interface';
import { CreateMessageDTO } from '../../message/dto/create-message.dto';
import { User } from '../../users/entities/user.entity';

export class SlackNotificationDecorator
  implements NotificationDecoratorInterface
{
  constructor(
    private notification: NotificationDecoratorInterface,
    CreateMessageDTO: CreateMessageDTO,
    User: User,
  ) {}

  notify(): void {
    this.notification.notify();
    console.log('This is a Slack Notification');
  }
}
