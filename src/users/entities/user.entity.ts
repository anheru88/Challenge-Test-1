/**
 * Represents a User entity in the database.
 */
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { UserInterface } from './interfaces/user.interface';
import { Category } from '../../categories/entities/category.entity';

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

  @ManyToMany(() => Category)
  @JoinTable()
  subscribed: Category[];
}
