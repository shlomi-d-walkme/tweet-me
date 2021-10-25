import { Controller } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';

@Controller()
export class FollowersController {
  @EventPattern('followers', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log(message.value)
  }
}
