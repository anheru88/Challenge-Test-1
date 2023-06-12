import { UserInterface } from '../../entities/interfaces/user.interface';

export interface UserRepositoryInterface {
  getAll: () => Promise<UserInterface[]>;
}
