/**
 * Represents a Category entity in the database.
 */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { CategoryInterface } from './interfaces/category.interface';

@Entity({ name: 'categories' })
export class Category extends BaseEntity implements CategoryInterface {
  /**
   * The name of the category.
   */
  @Column({ unique: true })
  name: string;
}
