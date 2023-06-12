import { Category } from '../../../categories/entities/category.entity';

export interface UserInterface {
  name: string;
  email: string;
  phoneNumber: string;
  subscribed: Category[];
}

// Subscribed [ ] here you need to list all the categories where the user is subscribed
// Channels [ ] a list of the notification's channels (SMS | E-Mail | Push Notification)
