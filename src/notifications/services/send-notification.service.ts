import { CreateMessageDTO } from '../../message/dto/create-message.dto';
import { Injectable } from '@nestjs/common';
import { CategoriesService } from '../../categories/services/categories.service';
import { UserService } from '../../users/services/user.service';
import { User } from '../../users/entities/user.entity';
import { Notification } from '../entities/notification.entity';
import { NotificationDecoratorInterface } from '../decorators/interfaces/notification-decorator.interface';
import { BaseNotification } from '../decorators/base.notification';
import { SmsNotificationDecorator } from '../decorators/sms-notification.decorator';
import { EMailNotificationDecorator } from '../decorators/e-mail-notification.decorator';
import { PushNotificationDecorator } from '../decorators/push-notification.decorator';
import { SlackNotificationDecorator } from '../decorators/slack-notification.decorator';
import { DiscordNotificationDecorator } from '../decorators/discord-notification.decorator';

@Injectable()
export class SendNotificationService {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly userService: UserService,
  ) {}

  async send(CreateMessageDTO: CreateMessageDTO): Promise<any> {
    const users = await this.getUsers(CreateMessageDTO);
    users.forEach((user: User) => {
      this.sendNotification(CreateMessageDTO, user);
    });
  }

  private async getUsers(CreateMessageDTO: CreateMessageDTO) {
    const category = await this.categoriesService.categoryRepository.findBy({
      name: CreateMessageDTO.category,
    });

    const categoryID = category[0].id;

    return await this.userService.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.subscribed', 'category')
      .leftJoinAndSelect('user.channels', 'notification')
      .where('category.id = :categoryID', { categoryID })
      .getMany();
  }

  private async sendNotification(
    CreateMessageDTO: CreateMessageDTO,
    User: User,
  ): Promise<void> {
    const notifications: Notification[] = User.channels;
    const names = notifications.map((notification) => notification.name);
    let notification: NotificationDecoratorInterface = new BaseNotification();

    if (names.includes('SMS')) {
      notification = new SmsNotificationDecorator(
        notification,
        CreateMessageDTO,
        User,
      );
    }

    if (names.includes('E-Mail')) {
      notification = new EMailNotificationDecorator(
        notification,
        CreateMessageDTO,
        User,
      );
    }

    if (names.includes('Push Notification')) {
      notification = new PushNotificationDecorator(
        notification,
        CreateMessageDTO,
        User,
      );
    }

    if (names.includes('Slack')) {
      notification = new SlackNotificationDecorator(
        notification,
        CreateMessageDTO,
        User,
      );
    }

    if (names.includes('Discord')) {
      notification = new DiscordNotificationDecorator(
        notification,
        CreateMessageDTO,
        User,
      );
    }

    notification.notify();
  }
}
