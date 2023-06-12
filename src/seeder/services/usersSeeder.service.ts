import { Injectable } from '@nestjs/common';

import { User } from '../../users/entities/user.entity';
import { UserRepositoryTypeORM } from '../../users/repositories/userRepository.TypeORM';
import { UserDTO } from '../../users/dto/user.dto';
import { UserFactory } from '../../users/factory/user.factory';
import { UserService } from '../../users/services/user.service';
import { CategoriesService } from '../../categories/services/categories.service';
import { UserInterface } from '../../users/entities/interfaces/user.interface';

@Injectable()
export class UsersSeederService {
  constructor(
    private readonly userRepository: UserRepositoryTypeORM,
    private readonly userService: UserService,
    private readonly categoryService: CategoriesService,
  ) {}

  /**
   * Seed all information.
   *
   * @function
   */
  async create(): Promise<Array<Promise<User>>> {
    const users: UserDTO[] = [];
    const userFactory = new UserFactory(this.categoryService);
    for (let i = 0; i < 100; i++) {
      const user = await userFactory.create();
      users.push(user);
    }

    return users.map(async (user: UserInterface) => {
      return await this.userService.userRepository.save(user);
    });
  }

  async findAll(): Promise<number> {
    const users = await this.userRepository.getAll();
    return users.length;
  }
}
