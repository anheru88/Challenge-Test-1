/**
 * Represents a User entity in the database.
 */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UserInterface } from './interfaces/user.interface';

@Entity({ name: 'users' })
export class User extends BaseEntity implements UserInterface {
  /**
   * The name of the user.
   */
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phoneNumber: string;
}
