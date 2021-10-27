import { Injectable } from '@nestjs/common';
import { FollowsModel } from '../models/follows.model';
import { mongoose } from '@typegoose/typegoose'

@Injectable()
export class FollowsRepo {
    constructor() {}

    async addFollow(userProfileId: string, followingProfileId: string) {
        const follower = await FollowsModel.findOrCreate(userProfileId);
        await follower.follow(followingProfileId);
    }

    async removeFollow(userProfileId: string, unfollowingProfileId: string) {
        const follower = await FollowsModel.findOrCreate(userProfileId);
        await follower.unfollow(unfollowingProfileId);
    }

    async getFollowing(userProfileId: string) {
        const profileData = await FollowsModel.findOne({userProfileId});
        const following = profileData?.following || new mongoose.Types.Array<string>();
        return following;
    }

    async getFollowers(userProfileId: string) {
        const profileData = await FollowsModel.findOne({userProfileId});
        const followers = profileData?.followers || new mongoose.Types.Array<string>();
        return followers;
    }
}