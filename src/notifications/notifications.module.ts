import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entities/notification.entity';
import { NotificationService } from './services/notification.service';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  providers: [NotificationService],
  exports: [TypeOrmModule, NotificationService],
})
export class NotificationsModule {}
