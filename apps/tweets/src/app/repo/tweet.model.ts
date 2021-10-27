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

    // async addTweet(this: DocumentType<Tweet>, profileId:string) {
    //     this.following.addToSet(followingProfileId);

    //     const followee = await FollowsModel.findOrCreate(followingProfileId);
    //     followee.followers.addToSet(this.profileId);

    //     try{
    //         await this.save();
    //         await followee.save();
    //     } catch(e) {
    //         this.unfollow(followingProfileId);
    //     }
    // }
}

export const TweetModel = getModelForClass(Tweet);