import { Injectable } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { FollowsModel } from '../models/follows.model';

interface followsRepo {
    [profileId: string]: {
        followers: Set<string>,
        following: Set<string>
    }
}

@Injectable()
export class FollowsRepo {
    private followsRepo: followsRepo = {};

    constructor(private db:DbModule) {}

    public async addFollow(userProfileId: string, followingProfileId: string): Promise<boolean> {
        this.initFollowIfNeeded(followingProfileId);
        this.initFollowIfNeeded(userProfileId);

        try {
            console.log(`user profile: ${userProfileId} is following id: ${followingProfileId}`);
            this.followsRepo[followingProfileId].followers.add(userProfileId);
            console.log(`user profile ${followingProfileId} is followed by ${(new Array(...this.followsRepo[followingProfileId].followers).join(' '))}`);
            this.followsRepo[userProfileId].following.add(followingProfileId);
            console.log(`user profile ${userProfileId} is following ${(new Array(...this.followsRepo[userProfileId].following).join(' '))}`);
            
            //MONGO
            const follower = await FollowsModel.findOrCreate(userProfileId);
            await follower.follow(followingProfileId);

        } catch(ex) {
            return false;
        }
        
        return true;
    }

    public async removeFollow(userProfileId: string, unfollowingProfileId: string): Promise<boolean> {
        // Should be as a transaction
        this.initFollowIfNeeded(userProfileId);
        this.initFollowIfNeeded(unfollowingProfileId);
        try {
            this.followsRepo[unfollowingProfileId].followers.delete(userProfileId);
            this.followsRepo[userProfileId].following.delete(unfollowingProfileId);

            //MONGO
            const follower = await FollowsModel.findOrCreate(userProfileId);
            await follower.unfollow(unfollowingProfileId);

        } catch(ex) {
            return false;
        }
        return true;
    }

    public getFollowing(userProfileId: string): Set<string> {
        this.initFollowIfNeeded(userProfileId);
        return this.followsRepo[userProfileId].following;
    }

    public getFollowers(userProfileId: string): Set<string> {
        this.initFollowIfNeeded(userProfileId);
        return this.followsRepo[userProfileId].followers;
    }

    private initFollowIfNeeded(profileId: string): void {
        if(!this.followsRepo[profileId]) {
            this.followsRepo[profileId] = { followers: new Set<string>(), following: new Set<string>()};
        }
    }
}
