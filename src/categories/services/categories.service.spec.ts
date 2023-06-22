import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { CategoriesService } from './categories.service';
import { Category } from '../entities/category.entity';
import { plainToClass } from 'class-transformer';

const oneCategory: Category = plainToClass(Category, {
  id: '97fbe5c4-63b3-48e2-a40e-83beca5aa41a',
  name: 'Finance',
});

describe('CategoriesService', () => {
  let service: CategoriesService;

  const mockedRepo = {
    // mock the repo `findBy`
    findBy: jest.fn(({}) => Promise.resolve(oneCategory)),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        // Provide the original service
        CategoriesService,
        // Mock the repository using the `getRepositoryToken` from @nestjs/typeorm
        {
          provide: getRepositoryToken(Category),
          useValue: mockedRepo,
        },
      ],
    }).compile();
    // get the service from the testing module.
    service = await module.get(CategoriesService);
  });

  afterEach(() => jest.clearAllMocks());

  describe('getCategory', () => {
    it('should return Category', async () => {
      const findBySpy = jest.spyOn(mockedRepo, 'findBy');

      const category = await service.categoryRepository.findBy({
        name: oneCategory.name,
      });
      // check the result against the expected results
      expect(category).toEqual(oneCategory);

      // Ensure that the spies are called once with the appropriate arguments
      expect(findBySpy).toHaveBeenCalledTimes(1);
    });
  });
});
