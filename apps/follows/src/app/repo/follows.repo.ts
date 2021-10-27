import { Injectable } from '@nestjs/common';
import { FollowsModel } from '../models/follows.model';

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
        return profileData.following;
    }

    async getFollowers(userProfileId: string) {
        const profileData = await FollowsModel.findOne({userProfileId});
        return profileData.followers;
    }
}