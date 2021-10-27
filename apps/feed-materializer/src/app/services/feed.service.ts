import { Injectable } from '@nestjs/common';
import {MessagingService} from '@tweet-me/shared/kafka-infra';
import { ActionType as TWEETS_ACTION, FollowsKafkaModel, TweetKafkaModel } from '@tweet-me/api-interfaces';
import { TweetService } from './tweet.service';
import { FollowService } from './follow.service';



@Injectable()
export class FeedService {

  constructor(private messagingService:  MessagingService,private tweetService: TweetService, private followService: FollowService){}

    consume(){

      this.messagingService.consume<FollowsKafkaModel>('follows',async (data)  =>{
      console.log(data); 
      const { action, profileId, followerId } = data;

      this.followService.onFollow(action, profileId, followerId);
    })

    this.messagingService.consume<TweetKafkaModel>('tweets',async (data) =>{

      const { action, tweet } = data;

      this.tweetService.onTweet(TWEETS_ACTION.tweetCreated, tweet);
      
    })

    
  }

}
