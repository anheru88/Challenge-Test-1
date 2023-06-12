import { Injectable } from '@nestjs/common';
import { Category } from '../../categories/entities/category.entity';
import { categoriesData } from '../data/categories.data';
import { CategoriesService } from '../../categories/services/categories.service';
import { CategoryInterface } from '../../categories/entities/interfaces/category.interface';

@Injectable()
export class CategoriesSeederService {
  constructor(private readonly categoryService: CategoriesService) {}

  /**
   * Seed all information.
   *
   * @function
   */
  create(): Array<Promise<Category>> {
    return categoriesData.map(async (category: CategoryInterface) => {
      return await this.categoryService.categoryRepository
        .findOneBy({ name: category.name })
        .then(async (dbCategory) => {
          if (dbCategory) {
            return Promise.resolve(null);
          }

          return Promise.resolve(
            await this.categoryService.categoryRepository.save(category),
          );
        });
    });
  }
}
