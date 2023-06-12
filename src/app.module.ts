import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { DatabaseProvidersModule } from './database-providers/database-providers.module';

@Module({
  imports: [DatabaseProvidersModule, CategoriesModule],
})
export class AppModule {}
