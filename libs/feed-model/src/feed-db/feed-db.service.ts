import { Injectable } from '@nestjs/common';
import { mongoose } from '@typegoose/typegoose';
import { FeedTweetModel, FeedTweet } from '..';

@Injectable()
export class FeedDbService {
    
    async onModuleInit() {
        if (!process.env.DB_PATH ) {
            throw new Error('Env vriable DB_PATH not defined, it should be something like "mongodb://localhost:27017/tweet-me-feed-materializer"') 
        }
        try {
          
            const result = await mongoose.connect(process.env.DB_PATH);
            console.log('connected to DB service');
        } catch(e) {
            console.error(e);
        }
    }

    async getTweets(profileId: string): Promise<FeedTweet[]> {
        return await FeedTweetModel.find({
            feedOwnerId: profileId
        });
    }

    async createFeedTweetes(tweets:FeedTweet[]){
        await FeedTweetModel.create(tweets);
    }

    async updateFeedTweetes(tweetId: string,content: string){
        await FeedTweetModel.updateMany({"tweetId": tweetId}, {"$set":{"content": content}});
    }

    async deleteTweetFromFeeds(tweetId:string){
        const deletedItems = await FeedTweetModel.deleteMany({tweetId: tweetId});
        console.log(`deleted ${deletedItems} items`)
    }

    async deleteTweetsFromFeed(feedOwnerId:string,tweetId:string[]){
        const deletedItems = await FeedTweetModel.deleteMany({feedOwnerId: feedOwnerId,$in: tweetId});
        console.log(`deleted ${deletedItems} items`)
    }


}
