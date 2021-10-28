import { TweetsDto } from '../dto/tweets-dto';
import { prop, getModelForClass, ReturnModelType, DocumentType, mongoose } from '@typegoose/typegoose'
import { SingleTweet, SingleTweetModel } from './single-tweet-model';

export class NewTweet {
    @prop({
        required: true,
        unique: true,
    })
    tweetId: string;

    @prop()
    tweet: SingleTweet;

    static async findOrCreate(this: ReturnModelType<typeof Tweet>, tweetId:string) {
        const connection = await this.findOne({tweetId}).exec();
        if (connection) return connection;

        return new TweetModel({ tweetId });
    }

    async addTweet(this: DocumentType<Tweet>, tweet:SingleTweet) {
        this.tweet = tweet;
        try{
            await this.save();
        } catch(e) {
            console.log("error adding to tweets db", e);
        }
    }

    // async getTweets(this: DocumentType<Tweet>): Promise<SingleTweet[]> {
    //     return this.tweets;
    // }

    // async removeTweet(this: DocumentType<Tweet>, tweetId: string) {
    //     const tweet = this.tweets.find((t)=> t.id == tweetId);
    //     if (!tweet) return;
    //     this.tweets.remove(tweet);
    //     try{
    //         await this.save();
    //     } catch(e) {
    //         console.log("error adding to tweets db", e);
    //     }
    // }

    // async updateTweet(this: DocumentType<Tweet>, tweetId: string, content: string) {
    //     const tweet = this.tweets.find((t)=> t.id == tweetId);
    //     if (!tweet) return;
    //     tweet.content = content;
    //     console.log("update", tweet);

    //     //await FeedTweetModel.updateMany({"tweetId": tweetId}, {"$set":{"content": content,"comments": comments}});
        

    //     try{
    //         await this.save();
    //         return tweet;
    //     } catch(e) {
    //         console.log("error adding to tweets db", e);
    //     }
    // }
}

export const TweetNewModel = getModelForClass(Tweet);