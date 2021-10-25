import { Controller } from '@nestjs/common';
import { KafkaMessage } from 'kafkajs';
import { EventPattern, Payload, Transport } from '@nestjs/microservices';
import { DefaultApi as TweetDefaultApi, Configuration as TweetConfiguration, TweetsDto } from '@sdk/tweets-sdk';

@Controller()
export class FollowersController {
  tweetApi = new TweetDefaultApi(new TweetConfiguration({basePath: "http://localhost:4444"}));

  @EventPattern('follows', Transport.KAFKA)
  async onTweet(@Payload() message: KafkaMessage) {
    console.log("this is a new follow");
    console.log(JSON.stringify(message.value));
    console.log(message.key);
    /*const { data, action } = message.value;
    const tweets: TweetsDto[] = await (await this.tweetApi.tweetsGetTweets(message.key.toString())).data; */
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
