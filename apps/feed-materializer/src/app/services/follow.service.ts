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

    async onFollow(action:FOLLOWS_ACTION, profileId: string, feedUser: string) {
      console.log('onFollow');
      console.log('get tweets of', profileId);
        const tweets: TweetsDto[] = await (await this.tweetApi.tweetsGetTweets(profileId)).data;
        console.log('tweets', tweets);
        switch(action) {
            case FOLLOWS_ACTION.FOLLOW:
              this.addTweetsToFeed(tweets, feedUser, profileId);
              break;
            case FOLLOWS_ACTION.UNFOLLOW:
              this.deleteTweetsFromFeed(tweets, feedUser);
              break;
          }
    }

    async addTweetsToFeed(tweets: TweetsDto[], feedUser: string, profileId: string) {
      const tweetOwnerProfile: ProfileResponse = (await this.profileApi.getProfile(profileId)).data;
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
    
      async deleteTweetsFromFeed(tweets: TweetsDto[], feedUser: string) {
        const tweetsIds = tweets.map(tweet => tweet.id);
        this.db.deleteTweetsFromFeed(feedUser, tweetsIds);
      }
}
