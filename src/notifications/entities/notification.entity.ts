/**
 * Represents a Notification entity in the database.
 */
import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { NotificationInterface } from './interfaces/notification.interface';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity implements NotificationInterface {
  /**
   * The name of the category.
   */
  @Column({ unique: true })
  name: string;
}
