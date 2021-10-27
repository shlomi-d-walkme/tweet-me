import { prop, getModelForClass } from '@typegoose/typegoose'

class FeedTweetEntity {
    @prop({
        required: true
    })
    feedOwnerId: string;

    @prop({
        required: true
    })
    tweetOwnerId: string;

    @prop({
        required: true
    })
    tweetOwnerName: string;

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

export type FeedTweet = Pick<FeedTweetEntity, keyof FeedTweetEntity>;
export const FeedTweetModel = getModelForClass(FeedTweetEntity);
