import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoriesService } from './services/categories.service';
import { CategoryRepositoryTypeORM } from './repositories/categoryRepository.TypeORM';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService, CategoryRepositoryTypeORM],
  exports: [TypeOrmModule, CategoriesService, CategoryRepositoryTypeORM],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
