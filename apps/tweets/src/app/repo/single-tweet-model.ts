import { getModelForClass, prop } from "@typegoose/typegoose";

export class SingleTweet {
    // @prop({
    //     required: true,
    //     unique: true,
    // })
    // id: string;

    @prop()
    content: string;

    @prop()
    date: string;

    @prop()
    profileId: string;

    @prop()
    parentId: string;
}

export const SingleTweetModel = getModelForClass(SingleTweet);