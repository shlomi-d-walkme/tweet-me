import { prop, getModelForClass } from '@typegoose/typegoose'

export class FeedTweet {
    @prop({
        required: true
    })
    feedOwnerId: string;

    @prop({
        required: true,
    })
    tweetId: string;
    
    @prop()
    content: string;

    @prop({
        select: false,
    })
    comments: number;

    @prop({
        default: () => Date.now()
    })
    creationDate: Date;


}

export const FeedTweetModel = getModelForClass(FeedTweet);
