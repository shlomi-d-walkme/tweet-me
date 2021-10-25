import { Controller } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { FeedTweetModel } from '../entities/feedTweet.model';

@Controller()
export class TweetsController {
  @EventPattern('tweets', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log(message.value)
    const omry =  await FeedTweetModel.create({feedOwnerId: '1111',tweetId: '67889', })
   
  }
}
