import { Injectable } from '@nestjs/common';
import { ActionType as TWEETS_ACTION } from '@tweet-me/api-interfaces';
import { DefaultApi as FollowsDefaultApi, Configuration as FollowsConfiguration, FollowersDto } from '@tweet-me/sdk/follows-sdk';
import { FeedTweet } from '@tweet-me/feed-model';
import { FeedDbService } from '@tweet-me/feed-model';
import { DefaultApi as TweetDefaultApi, Configuration as TweetConfiguration, TweetsDto } from '@sdk/tweets-sdk';
import { FOLLOWS_ACTION } from '@tweet-me/api-interfaces';


@Injectable()
export class FollowService {
    private tweetApi:TweetDefaultApi;
    
    constructor(private db: FeedDbService ){
        this.tweetApi = new TweetDefaultApi(new TweetConfiguration({basePath: "http://localhost:4444"}));
    }

    async onFollow(action:FOLLOWS_ACTION, profileId: string, feedUser: string) {
        const tweets: TweetsDto[] = await (await this.tweetApi.tweetsGetTweets(profileId)).data;
        
        switch(action) {
            case FOLLOWS_ACTION.FOLLOW:
              this.addTweetsToFeed(tweets, feedUser);
              break;
            case FOLLOWS_ACTION.UNFOLLOW:
              this.deleteTweetsFromFeed(tweets, feedUser);
              break;
          }
    }

    async addTweetsToFeed(tweets: any, feedUser: string) {
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
    
      async deleteTweetsFromFeed(tweets: any, feedUser: string) {
        //delete tweets for follower
      }
}
