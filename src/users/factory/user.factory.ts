import { UserInterface } from '../entities/interfaces/user.interface';
import { faker } from '@faker-js/faker';
import { CategoriesService } from '../../categories/services/categories.service';

export class UserFactory {
  constructor(private readonly categoryService: CategoriesService) {}

  async create(): Promise<UserInterface> {
    const categories = await this.categoryService.categoryRepository.find();

    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      subscribed: faker.helpers.arrayElements(categories),
    };
  }
}
