import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from '../categories/categories.module';
import { Seeder } from './providers/seeder';
import { CategoriesSeederService } from './services/categoriesSeeder.service';
import { DatabaseProvidersModule } from '../database-providers/database-providers.module';

@Module({
  imports: [DatabaseProvidersModule, TypeOrmModule, CategoriesModule],
  providers: [Logger, CategoriesSeederService, Seeder],
})
export class SeederModule {}
