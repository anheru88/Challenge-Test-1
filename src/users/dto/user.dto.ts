import { UserInterface } from '../entities/interfaces/user.interface';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserDTO implements UserInterface {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;
}
