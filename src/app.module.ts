import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseProvidersModule } from './database-providers/database-providers.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    DatabaseProvidersModule,
    CategoriesModule,
    NotificationsModule,
    UsersModule,
    LoggerModule,
  ],
})
export class AppModule {}
