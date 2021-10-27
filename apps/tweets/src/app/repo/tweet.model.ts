import { prop, getModelForClass, ReturnModelType, DocumentType, mongoose } from '@typegoose/typegoose'

export class Tweet {
    @prop({
        required: true,
        unique: true,
    })
    profileId: string;

    // @prop()
    // followers: mongoose.Types.Array<string>;

    static async findOrCreate(this: ReturnModelType<typeof Tweet>, profileId:string) {
        const connection = await this.findOne({profileId}).exec();
        if (connection) return connection;

        return new TweetModel({ profileId });
    }
}

export const TweetModel = getModelForClass(Tweet);