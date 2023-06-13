import { Body, Controller, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { MessageService } from './services/message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Post()
  creteMessage(@Body() createMessageDto: CreateMessageDTO) {
    return this.messageService.createMessage(createMessageDto);
  }
}
