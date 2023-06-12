import { Injectable } from '@nestjs/common';

import { User } from '../../users/entities/user.entity';
import { UserRepositoryTypeORM } from '../../users/repositories/userRepository.TypeORM';
import { UserDTO } from '../../users/dto/user.dto';
import { UserFactory } from '../../users/factory/user.factory';
import { notificationsData } from '../data/notifications.data';
import { NotificationInterface } from '../../notifications/entities/interfaces/notification.interface';
import { UserInterface } from '../../users/entities/interfaces/user.interface';
import { UserService } from '../../users/services/user.service';

@Injectable()
export class UsersSeederService {
  constructor(
    private readonly userRepository: UserRepositoryTypeORM,
    private readonly userService: UserService,
  ) {}

  /**
   * Seed all information.
   *
   * @function
   */
  create(): Array<Promise<User>> {
    const users: UserDTO[] = [];
    for (let i = 0; i < 100; i++) {
      const user = UserFactory.create();
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
