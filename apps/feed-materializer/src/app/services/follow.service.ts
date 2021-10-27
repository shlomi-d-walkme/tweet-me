import { Injectable } from '@nestjs/common';
import { ActionType as TWEETS_ACTION } from '@tweet-me/api-interfaces';
import { DefaultApi as FollowsDefaultApi, Configuration as FollowsConfiguration, FollowersDto } from '@tweet-me/sdk/follows-sdk';
import { FeedTweet } from '@tweet-me/feed-model';
import { FeedDbService } from '@tweet-me/feed-model';
import { DefaultApi as TweetDefaultApi, Configuration as TweetConfiguration, TweetsDto } from '@sdk/tweets-sdk';
import { FOLLOWS_ACTION } from '@tweet-me/api-interfaces';
import { DefaultApi as ProfileDefaultApi, Configuration as ProfileConfiguration, ProfileResponse } from '@tweet-me/sdk/profile-sdk';



@Injectable()
export class FollowService {
    private tweetApi:TweetDefaultApi;
    private profileApi:ProfileDefaultApi;

    
    constructor(private db: FeedDbService ){
        this.tweetApi = new TweetDefaultApi(new TweetConfiguration({basePath: "http://localhost:4444"}));
        this.profileApi = new ProfileDefaultApi(new ProfileConfiguration({basePath: "http://localhost:666"}));
    }

    async onFollow(action:FOLLOWS_ACTION, tweetsProfileId: string, feedUser: string) {
      console.log('onFollow');
      console.log('get tweets of', tweetsProfileId);
        switch(action) {
            case FOLLOWS_ACTION.FOLLOW:
              this.addTweetsToFeed(feedUser, tweetsProfileId);
              break;
            case FOLLOWS_ACTION.UNFOLLOW:
              this.deleteTweetsFromFeed(feedUser, tweetsProfileId);
              break;
          }
    }

    async addTweetsToFeed(feedUser: string, tweetsProfileId: string) {
      const tweets: TweetsDto[] = await (await this.tweetApi.tweetsGetTweets(tweetsProfileId)).data;
      console.log('tweets', tweets);

      const tweetOwnerProfile: ProfileResponse = (await this.profileApi.getProfile(tweetsProfileId)).data;
      const feedTweets: FeedTweet[] = [];

      tweets.forEach(tweet => {
          const newTweetInFeed: FeedTweet = {
            feedOwnerId: feedUser,
            tweetOwnerId: tweetOwnerProfile._id,
            tweetOwnerName: tweetOwnerProfile.name,
            tweetId: tweet.id,
            content: tweet.content,
            comments: 0,
            creationDate: new Date(tweet.date)      
          }
          feedTweets.push(newTweetInFeed);

        });
        console.log('feedTweets', feedTweets);
        this.db.createFeedTweetes(feedTweets);
      }
    
      async deleteTweetsFromFeed(feedUser: string, tweetsProfileId: string) {
        this.db.deleteTweetsFromFeed(feedUser, tweetsProfileId);
      }
}
