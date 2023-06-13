import { Injectable } from '@nestjs/common';
import { CreateMessageDTO } from '../dto/create-message.dto';
import { SendNotificationService } from '../../notifications/services/send-notification.service';

@Injectable()
export class MessageService {
  constructor(
    private readonly SendNotificationService: SendNotificationService,
  ) {}

  async createMessage(createMessageDto: CreateMessageDTO): Promise<any> {
    await this.SendNotificationService.send(createMessageDto);
  }
}
