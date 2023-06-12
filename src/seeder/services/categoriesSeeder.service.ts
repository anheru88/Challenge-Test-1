import { Injectable } from '@nestjs/common';
import { Category } from '../../categories/entities/category.entity';
import { categories } from '../data/categories.data';
import { ICategory } from '../../interfaces/category.interface';
import { CategoriesService } from '../../categories/services/categories.service';

@Injectable()
export class CategoriesSeederService {
  constructor(private readonly categoryService: CategoriesService) {}
  /**
   * Seed all information.
   *
   * @function
   */
  create(): Array<Promise<Category>> {
    return categories.map(async (category: ICategory) => {
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
