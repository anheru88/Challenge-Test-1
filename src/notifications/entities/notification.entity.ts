/**
 * Represents a Notification entity in the database.
 */
import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { NotificationInterface } from './interfaces/notification.interface';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'notifications' })
export class Notification extends BaseEntity implements NotificationInterface {
  /**
   * The name of the notification.
   */
  @Column({ unique: true })
  name: string;

  @ManyToMany(() => User, (user) => user.subscribed)
  users: User[];
}
