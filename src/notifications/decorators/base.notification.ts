import { NotificationDecoratorInterface } from './interfaces/notification-decorator.interface';

export class BaseNotification implements NotificationDecoratorInterface {
  notify(): void {}
}
