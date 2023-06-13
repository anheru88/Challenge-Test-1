import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  getAllCategories() {
    return this.categoriesService.categoryRepository.find();
  }
}
