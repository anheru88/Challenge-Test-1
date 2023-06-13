import { Category } from '../../../categories/entities/category.entity';
import { Notification } from '../../../notifications/entities/notification.entity';

export interface UserInterface {
  name: string;
  email: string;
  phoneNumber: string;
  subscribed: Category[];
  channels: Notification[];
}
