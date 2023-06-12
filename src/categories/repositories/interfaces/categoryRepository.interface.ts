import { CategoryInterface } from '../../entities/interfaces/category.interface';

export interface CategoryRepositoryInterface {
  getAll: () => Promise<CategoryInterface[]>;
}
