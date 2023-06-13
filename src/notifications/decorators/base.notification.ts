import { NotificationDecoratorInterface } from './interfaces/notification-decorator.interface';

export class BaseNotification implements NotificationDecoratorInterface {
  notify(): void {
    console.log('This is a Base Notification');
  }
}
