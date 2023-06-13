import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../config/base.entity';
import { LogInterface } from './interfaces/log.interface';

@Entity({ name: 'logs' })
export class Log extends BaseEntity implements LogInterface {
  @Column()
  category: string;

  @Column()
  message: string;

  @Column()
  notificationType: string;

  @Column()
  userInfo: string;
}
