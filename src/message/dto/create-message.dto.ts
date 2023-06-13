import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMessageDTO {
  @IsNotEmpty()
  @IsString()
  message: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
