import { Injectable } from '@nestjs/common';

import { NotificationService } from '../../notifications/services/notification.service';
import { NotificationInterface } from '../../notifications/entities/interfaces/notification.interface';
import { notificationsData } from '../data/notifications.data';

@Injectable()
export class NotificationsSeederService {
  constructor(private readonly notificationService: NotificationService) {}
  /**
   * Seed all information.
   *
   * @function
   */
  create(): Array<Promise<Notification>> {
    return notificationsData.map(
      async (notification: NotificationInterface) => {
        return await this.notificationService.notificationRepository
          .findOneBy({ name: notification.name })
          .then(async (dbCategory) => {
            if (dbCategory) {
              return Promise.resolve(null);
            }

            return Promise.resolve(
              await this.notificationService.notificationRepository.save(
                notification,
              ),
            );
          });
      },
    );
  }
}
