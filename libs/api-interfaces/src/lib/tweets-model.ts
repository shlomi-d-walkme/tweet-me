import {TweetsDto} from '@sdk/tweets-sdk'

export enum ActionType {
    tweetCreated,
    tweetDeleted,
    tweetUpdate
}

export class TweetKafkaModel {

    constructor(tweet: TweetsDto,
      action: ActionType) {
        this.tweet = tweet;
        this.action = action; 
    }
  
    tweet: TweetsDto; 
    action: ActionType;
  }
  