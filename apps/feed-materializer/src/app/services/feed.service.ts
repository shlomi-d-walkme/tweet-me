import {Injectable} from '@nestjs/common';
import {MessagingService} from '@tweet-me/shared/kafka-infra';
import {ActionType as TWEETS_ACTION, FollowsKafkaModel, TweetKafkaModel} from '@tweet-me/api-interfaces';
import {TweetService} from './tweet.service';
import {FollowService} from './follow.service';


@Injectable()
export class FeedService {

  constructor(
      private readonly messagingService:  MessagingService,
      private readonly tweetService: TweetService,
      private readonly followService: FollowService
  ){}

    async consume(){
      const self = this;

      console.log('Starting consuming tweets')
      await this.messagingService.consume<TweetKafkaModel>('tweets',async function (data) {
        console.log("got tweetttttt");
        const { action, tweet } = data;

        await self.tweetService.onTweet(TWEETS_ACTION.tweetCreated, tweet);
        return;
      })

      console.log('Starting consuming follows')
      await this.messagingService.consume<FollowsKafkaModel>('follows',async function (data) {
        console.log(data);
        const { action, profileId, followerId } = data;

        await self.followService.onFollow(action, profileId, followerId);
        return;
      })
  }

}
