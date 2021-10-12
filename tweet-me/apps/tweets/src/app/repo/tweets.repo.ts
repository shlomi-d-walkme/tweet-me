import { Injectable } from '@nestjs/common';
import { TweetsDto } from '../dto/tweets-dto';

interface tweetsRepo {
    [profileId: string]: {
        tweets: Set<TweetsDto>
    }
}

@Injectable()
export class TweetsRepo {
    tweetsRepo: tweetsRepo = {};
    
    constructor() {
        //this.tweetsRepo[1] = {};
        //this.tweetsRepo[1].tweets = new Set<TweetsDto>();
        //this.tweetsRepo[1].tweets.add({content: "My Great Tweet", id: "1", date: new Date(), parentId: undefined})
    }

    public getTweets(profileId: string): void {
        this.init(profileId);
        const userTweets = this.tweetsRepo[profileId].tweets;
        console.log("getTweets Repo", userTweets);
    }

    private init(profileId: string): void {
        if(!this.tweetsRepo[profileId]) {
            this.tweetsRepo[profileId] = { tweets: new Set<TweetsDto>() };
        }
    }
}
