import { NotificationDecoratorInterface } from './interfaces/notification-decorator.interface';
import { CreateMessageDTO } from '../../message/dto/create-message.dto';
import { User } from '../../users/entities/user.entity';

export class SmsNotificationDecorator
  implements NotificationDecoratorInterface
{
  constructor(
    private notification: NotificationDecoratorInterface,
    private CreateMessageDTO: CreateMessageDTO,
    private User: User,
  ) {}

  notify(): void {
    const { message, category } = this.CreateMessageDTO;

    console.log(message);
    console.log(category);

    // this.logsService.logRepository.create({});

    console.log('This is a SMS Notification');

    this.notification.notify();
  }
}
