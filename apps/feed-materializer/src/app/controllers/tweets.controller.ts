import { Controller } from '@nestjs/common';
import { KafkaMessage, Kafka } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { DefaultApi as FollowsDefaultApi, Configuration as FollowsConfiguration, FollowersDto } from '@tweet-me/sdk/follows-sdk';
import { ActionType as TWEETS_ACTION } from '@tweet-me/api-interfaces';
import { FeedDbService, FeedTweet } from '@tweet-me/feed-model';

@Controller()
export class TweetsController {
  constructor(private db: FeedDbService){};

  followsApi = new FollowsDefaultApi(new FollowsConfiguration({basePath: "http://localhost:5555"}));

  @EventPattern('tweets', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log("this is a new tweet");
    console.log(JSON.stringify(message.value));
    console.log(message.key);

    const { data, actionType } = JSON.parse(JSON.stringify(message.value));
    console.log('data', data);
    console.log('actionType', actionType);
    const followers = await (await this.followsApi.followsControllerGetFollowersByUser("1")).data;
    console.log('followers', followers); 
    switch(actionType) {
      case TWEETS_ACTION.tweetCreated:
        this.addTweetToFeeds(data, followers);
        break;
      case TWEETS_ACTION.tweetUpdate:
        this.updateTweetInFeeds(data, followers);
        break;
      case TWEETS_ACTION.tweetDeleted:
        this.deleteTweetFromFeeds(data, followers);
        break;
    }
  }

  async addTweetToFeeds(tweet: any, followers: FollowersDto ) {
    const feedTweets: FeedTweet[] = [];
    
    followers.followers.forEach(follower => {
      const newTweetInFeed: FeedTweet = {
        feedOwnerId: follower,
        tweetId: tweet.id,
        content: tweet.content,
        comments: 0,
        creationDate: tweet.date      
      }
      feedTweets.push(newTweetInFeed);
    });
    console.log('feedTweets', feedTweets);
    this.db.createFeedTweetes(feedTweets);
    
    //const omry = await FeedTweetModel.insertMany(feedTweets);
  }

  async updateTweetInFeeds(tweet: any, followers: FollowersDto ) {
    //update tweet for followers
  }

  async deleteTweetFromFeeds(tweet: any, followers: FollowersDto ) {
    //delete tweet for followers
  }
}
