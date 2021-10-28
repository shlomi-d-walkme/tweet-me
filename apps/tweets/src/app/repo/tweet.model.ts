import { prop, getModelForClass, ReturnModelType, DocumentType, mongoose } from '@typegoose/typegoose'
import { Tweets } from '../controllers/tweets.controller';
import { TweetsDto } from '../dto/tweets-dto';

export class Tweet {
    @prop({
        required: true,
        unique: true,
    })
    profileId: string;

    @prop()
    tweets: mongoose.Types.Array<TweetsDto>;

    static async findOrCreate(this: ReturnModelType<typeof Tweet>, profileId:string) {
        const connection = await this.findOne({profileId}).exec();
        if (connection) return connection;

        return new TweetModel({ profileId });
    }

    async addTweet(this: DocumentType<Tweet>, tweet: TweetsDto) {
        this.tweets.addToSet(tweet);

        try{
            await this.save();
        } catch(e) {
            console.log("Tweet - can't add tweet to mongo", e);
        }
    }

    async getTweets(this: DocumentType<Tweet>): Promise<TweetsDto[]> {
        return this.tweets;
    }

    async getTweet(this: DocumentType<Tweet>, tweetId:string): Promise<TweetsDto> {
        const tweet = this.tweets.find((t)=> t.id == tweetId);
        return tweet;
    }
    
    async removeTweet(this: DocumentType<Tweet>, tweetId: string) {
        const tweet = this.tweets.find((t)=> t.id == tweetId);
        if (!tweet) return;
        this.tweets.remove(tweet);
        try{
            await this.save();
            return tweet;
        } catch(e) {
            console.log("error adding to tweets db", e);
        }
    }
}

export const TweetModel = getModelForClass(Tweet); 