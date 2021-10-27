import { Injectable } from '@nestjs/common';
import { FollowsModel } from '../models/follows.model';
import { mongoose } from '@typegoose/typegoose'

@Injectable()
export class FollowsRepo {
    constructor() {}

    async addFollow(profileId: string, followingProfileId: string) {
        const follower = await FollowsModel.findOrCreate(profileId);
        await follower.follow(followingProfileId);
    }

    async removeFollow(profileId: string, unfollowingProfileId: string) {
        const follower = await FollowsModel.findOrCreate(profileId);
        await follower.unfollow(unfollowingProfileId);
    }

    async getFollowing(profileId: string) {
        const profileData = await FollowsModel.findOne({profileId});
        const following = profileData?.following || new mongoose.Types.Array<string>();
        return following;
    }

    async getFollowers(profileId: string) {
        const profileData = await FollowsModel.findOne({profileId});
        console.log(`profileId = ${profileId}, profileData = ${profileData}`);
        const followers = profileData?.followers || new mongoose.Types.Array<string>();
        return followers;
    }
}