import { prop, getModelForClass, ReturnModelType, DocumentType, mongoose } from '@typegoose/typegoose'

export class Follows {
    @prop({
        required: true,
        unique: true,
    })
    profileId: string;

    @prop()
    followers: mongoose.Types.Array<string>;

    @prop()
    following: mongoose.Types.Array<string>;

    static async findOrCreate(this: ReturnModelType<typeof Follows>, profileId:string) {
        const connection = await this.findOne({profileId}).exec();
        if (connection) return connection;

        return new FollowsModel({ profileId });
    }

    async follow(this: DocumentType<Follows>, followingProfileId:string) {
        this.following.addToSet(followingProfileId);

        const followee = await FollowsModel.findOrCreate(followingProfileId);
        followee.followers.addToSet(this.profileId);

        try{
            await this.save();
            await followee.save();
        } catch(e) {
            this.unfollow(followingProfileId);
        }
    }

    async unfollow(this: DocumentType<Follows>, unfollowingProfileId:string) {
        this.following.remove(unfollowingProfileId);

        const followee = await FollowsModel.findOrCreate(unfollowingProfileId);
        followee.followers.remove(this.profileId);

        try{
            await this.save();
            await followee.save();
        } catch(e) {
            // remove follow
        }
    }
}

export const FollowsModel = getModelForClass(Follows);