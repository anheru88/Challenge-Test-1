import { UserInterface } from '../entities/interfaces/user.interface';
import { faker } from '@faker-js/faker';

export class UserFactory {
  static create(): UserInterface {
    return {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number(),
    };
  }
}
