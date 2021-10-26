import { Controller } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { DefaultApi as TweetDefaultApi, Configuration as TweetConfiguration, TweetsDto } from '@sdk/tweets-sdk';
import { FOLLOWS_ACTION } from '@tweet-me/api-interfaces';


@Controller()
export class FollowersController {
  tweetApi = new TweetDefaultApi(new TweetConfiguration({basePath: "http://localhost:4444"}));

  @EventPattern('follows', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log("this is a new follow");
    console.log(JSON.stringify(message.value));
    console.log(message.key);

    const { profileId, action } = JSON.parse(JSON.stringify(message.value));

    const tweets: TweetsDto[] = await (await this.tweetApi.tweetsGetTweets(profileId)).data;
    console.log('tweets', tweets);

    switch(action) {
      case FOLLOWS_ACTION.FOLLOW:
        this.addTweetsToFeed(tweets, message.key.toString());
        break;
      case FOLLOWS_ACTION.UNFOLLOW:
        this.deleteTweetsFromFeed(tweets, message.key.toString());
        break;
    }
  }

  async addTweetsToFeed(tweets: any, feedUser: any) {
    /*tweets.forEach(tweet => {
      const newTweetInFeed: FeedTweet = {
        feedOwnerId: feedUser,
        tweetId: tweet.Id,
        content: tweet.content,
        comments: tweet.comments,
        creationDate: tweet.creationDate      
      }
    });*/
  }

  async deleteTweetsFromFeed(tweets: any, feedUser: any) {
    //delete tweets for follower
  }
}
