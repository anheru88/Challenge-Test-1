import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseProvidersModule } from './database-providers/database-providers.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [DatabaseProvidersModule, CategoriesModule, NotificationsModule],
})
export class AppModule {}
