import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { Seeder } from './providers/seeder';
import { CategoriesSeederService } from './services/categoriesSeeder.service';
import { DatabaseProvidersModule } from '../database-providers/database-providers.module';
import { NotificationsModule } from '../notifications/notifications.module';
import { NotificationsSeederService } from './services/notificationsSeeder.service';

@Module({
  imports: [
    DatabaseProvidersModule,
    TypeOrmModule,
    CategoriesModule,
    NotificationsModule,
  ],
  providers: [
    Logger,
    CategoriesSeederService,
    NotificationsSeederService,
    Seeder,
  ],
})
export class SeederModule {}
