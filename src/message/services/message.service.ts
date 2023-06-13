import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from '../dto/create-message.dto';

@Injectable()
export class MessageService {
  createMessage(createMessageDto: CreateMessageDTO) {
    console.log(createMessageDto + ' From Service');
    // do something
  }
}
