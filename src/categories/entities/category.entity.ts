/**
 * Represents a Category entity in the database.
 */
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CategoryInterface } from './interfaces/category.interface';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'categories' })
export class Category extends BaseEntity implements CategoryInterface {
  /**
   * The name of the category.
   */
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => User, (user) => user.subscribed)
  users: User[];
}
