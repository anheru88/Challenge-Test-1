import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoriesService } from './services/categories.service';
import { CategoryRepositoryTypeORM } from './repositories/categoryRepository.TypeORM';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService, CategoryRepositoryTypeORM],
  exports: [TypeOrmModule, CategoriesService, CategoryRepositoryTypeORM],
})
export class CategoriesModule {}
