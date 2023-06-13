import { Body, Controller, Post } from '@nestjs/common';
import { CreateMessageDTO } from './dto/create-message.dto';
import { MessageService } from './services/message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Post()
  async creteMessage(@Body() createMessageDto: CreateMessageDTO) {
    return await this.messageService.createMessage(createMessageDto);
  }
}
