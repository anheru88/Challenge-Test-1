import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { ICategory } from '../../interfaces/category.interface';

@Entity({ name: 'categories' })
export class Category extends BaseEntity implements ICategory {
  @Column({ unique: true })
  name: string;
}
