import { Injectable } from '@nestjs/common';
import { TweetsDto } from '../dto/tweets-dto';
import { TweetsInputDto } from '../dto/tweets-input-dto';
import { TweetModel } from './tweet.model';

interface tweetsRepo {
    [profileId: string]: {
        tweets: Set<TweetsDto>
    }
}

@Injectable()
export class TweetsRepo {
    tweetsRepo: tweetsRepo = {};

    public async getTweets(profileId: string): Promise<Array<TweetsDto>> {
        const profile = await TweetModel.findOrCreate(profileId);
        return profile.tweets;
    }

    public async getTweet(profileId: string, tweetId): Promise<TweetsDto> {
        const profile = await TweetModel.findOrCreate(profileId);
        const tweet = profile.getTweet(tweetId);
        return tweet;
    }

    public async addTweet(profileId: string, content: string, parentId: string): Promise<TweetsDto> {
        const tweet = new TweetsDto();
        tweet.content = content;
        tweet.id = this.generateGuid();
        tweet.date = new Date();
        tweet.profileId = profileId;
        tweet.parentId = parentId;
        
        const profile = await TweetModel.findOrCreate(profileId);
        await profile.addTweet(tweet);
        return tweet;
    }

    public async removeTweet(profileId: string, tweetId: string): Promise<TweetsDto> {
        const profile = await TweetModel.findOrCreate(profileId);
        const tweet = await profile.removeTweet(tweetId);
        return tweet;
    }

    public updateTweet(profileId: string, tweetId: string, content: string): TweetsDto {
        this.init(profileId);
        const userTweets = this.tweetsRepo[profileId].tweets;
        const tweet = this.findTweet(userTweets, tweetId);
        tweet.content = content;
        return tweet;
    }

    private findTweet(tweets: Set<TweetsDto>, tweetId: string): TweetsDto {
        const tweet = Array.from(tweets).find(tweet => tweet.id == tweetId);
        return tweet;
    }

    private init(profileId: string): void {
        if(!this.tweetsRepo[profileId]) {
            this.tweetsRepo[profileId] = { tweets: new Set<TweetsDto>() };
        }
    }

    private generateGuid(): string {
        function S4() {  
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
         }  
         return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase(); 
    }
}
