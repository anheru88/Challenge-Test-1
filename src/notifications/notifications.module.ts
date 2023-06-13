import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './services/notification.service';
import { SendNotificationService } from './services/send-notification.service';
import { CategoriesModule } from '../categories/categories.module';
import { UsersModule } from '../users/users.module';
import { LoggerModule } from '../logger/logger.module';
import { SmsNotificationDecorator } from './decorators/sms-notification.decorator';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notification]),
    CategoriesModule,
    UsersModule,
    LoggerModule,
  ],
  providers: [
    NotificationService,
    SendNotificationService,
    SmsNotificationDecorator,
  ],
  exports: [TypeOrmModule, NotificationService, SendNotificationService],
})
export class NotificationsModule {}
