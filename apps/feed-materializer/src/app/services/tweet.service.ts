import { Injectable } from '@nestjs/common';
import { ActionType as TWEETS_ACTION } from '@tweet-me/api-interfaces';
import {TweetsDto} from '@sdk/tweets-sdk';
import { DefaultApi as FollowsDefaultApi, Configuration as FollowsConfiguration, FollowersDto } from '@tweet-me/sdk/follows-sdk';
import { DefaultApi as ProfileDefaultApi, Configuration as ProfileConfiguration, ProfileResponse } from '@tweet-me/sdk/profile-sdk';
import { FeedTweet } from '@tweet-me/feed-model';
import { FeedDbService } from '@tweet-me/feed-model';

@Injectable()
export class TweetService {
    private followsApi:FollowsDefaultApi;
    private profileApi: ProfileDefaultApi;

    constructor(private readonly  db: FeedDbService){
        this.followsApi = new FollowsDefaultApi(new FollowsConfiguration({basePath: "http://localhost:5555"}));
        this.profileApi = new ProfileDefaultApi(new ProfileConfiguration({basePath: "http://localhost:666"}));
    }

    async onTweet(action:TWEETS_ACTION, tweet: TweetsDto) {
        console.log("onTweet");
        const followers =  (await this.followsApi.followsControllerGetFollowersByUser(tweet.profileId)).data;

        switch(action) {
            case TWEETS_ACTION.tweetCreated:
                this.addTweetToFeeds(tweet, followers);
                break;
            case TWEETS_ACTION.tweetUpdate:
                this.updateTweetInFeeds(tweet, followers);
                break;
            case TWEETS_ACTION.tweetDeleted:
                this.deleteTweetFromFeeds(tweet, followers);
                break;
        }
    }

    async addTweetToFeeds(tweet: TweetsDto, followers: FollowersDto ) {
        const tweetOwnerProfile: ProfileResponse = (await this.profileApi.getProfile(tweet.profileId)).data;
        console.log("addTweetToFeeds");
        const feedTweets: FeedTweet[] = [];

        followers.followers.forEach(follower => {
            const newTweetInFeed: FeedTweet = {
                feedOwnerId: follower,
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

    async updateTweetInFeeds(tweet: any, followers: FollowersDto ) {
        //update tweet for followers
    }

    async deleteTweetFromFeeds(tweet: any, followers: FollowersDto ) {
        //delete tweet for followers
    }
}
