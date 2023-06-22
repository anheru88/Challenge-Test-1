import { Test, TestingModule } from '@nestjs/testing';

import { CategoriesController } from './categories.controller';
import { CategoriesService } from './services/categories.service';

describe('CategoriesController', () => {
  let categoryController: CategoriesController;

  beforeAll(async () => {
    const mockedControlelr = {
      getAllCategories: jest.fn(() => Promise.resolve()),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService],
    }).compile();
    categoryController = app.get<CategoriesController>(CategoriesController);
  });

  describe('getAllCategories', () => {
    // it('should return all categories', async () => {
    //   const categories = await categoryController.getAllCategories();
    //   expect(categories).toEqual([]);
    // });
  });
});
