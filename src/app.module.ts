import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseProvidersModule } from './database-providers/database-providers.module';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseProvidersModule, CategoriesModule, NotificationsModule, UsersModule],
})
export class AppModule {}
