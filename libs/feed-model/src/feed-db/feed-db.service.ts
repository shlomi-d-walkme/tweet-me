import { Injectable } from '@nestjs/common';
import { mongoose } from '@typegoose/typegoose';
import { FeedTweetModel, FeedTweet } from '..';

@Injectable()
export class FeedDbService {
    async onModuleInit() {
        try {
            const result = await mongoose.connect(process.env.DB_PATH);
            console.log('connected to DB service');
        } catch(e) {
            console.error(e);
        }
    }

    async createFeedTweetes(tweets:FeedTweet[]){
        await FeedTweetModel.create(tweets);
    }

    async updateFeedTweetes(tweets:FeedTweet[]){
        await FeedTweetModel.updateMany(tweets);
    }

    async deleteTweetFromFeeds(tweetId:string){
        const a = await FeedTweetModel.deleteMany({tweetId});
        console.log('deleted ${} items',a)
        //by owner ids tweet id 
    }

    async deleteTweetsFromFeed(feedOwnerId:string,tweetId:string[]){
        //by owner ids tweet id 
    }




    // async createFeedTweetes(feedOwnerId: string,tweetId: string,content: string){
    //     await FeedTweetModel.create({feedOwnerId,tweetId,content})
    // }

    
    
}
