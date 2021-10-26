import { Controller } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { FeedTweetModel } from '@tweet-me/feed-model';

@Controller()
export class TweetsController {
  @EventPattern('tweets', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log(message.value)
    const omry =  await FeedTweetModel.create({feedOwnerId: '1116',tweetId: '67889', })
   
  }
}
