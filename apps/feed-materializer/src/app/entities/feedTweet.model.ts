import { prop, getModelForClass } from '@typegoose/typegoose'

export class FeedTweet {
    @prop({
        require: true,
        unique: true,
    })
    profileId: string;

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

    @prop({
        unique: true,
    })
    email: string;
}

export const ProfileModel = getModelForClass(FeedTweet);
