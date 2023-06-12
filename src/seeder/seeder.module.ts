import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { Seeder } from './providers/seeder';
import { CategoriesSeederService } from './services/categoriesSeeder.service';
import { DatabaseProvidersModule } from '../database-providers/database-providers.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsSeederService } from './services/notificationsSeeder.service';
import { UsersSeederService } from './services/usersSeeder.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    DatabaseProvidersModule,
    TypeOrmModule,
    CategoriesModule,
    NotificationsModule,
    UsersModule,
  ],
  providers: [
    Logger,
    CategoriesSeederService,
    NotificationsSeederService,
    UsersSeederService,
    Seeder,
  ],
})
export class SeederModule {}
