import { UserInterface } from '../entities/interfaces/user.interface';
import { faker } from '@faker-js/faker';
import { CategoriesService } from '../../categories/services/categories.service';
import { NotificationService } from '../../notifications/services/notification.service';

export class UserFactory {
  constructor(
    private readonly categoryService: CategoriesService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(): Promise<UserInterface> {
    const categories = await this.categoryService.categoryRepository.find();
    const notifications =
      await this.notificationService.notificationRepository.find();

    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
      subscribed: faker.helpers.arrayElements(categories),
      channels: faker.helpers.arrayElements(notifications),
    };
  }
}
