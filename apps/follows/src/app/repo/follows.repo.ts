import { Injectable } from '@nestjs/common';

interface followsRepo {
    [profileId: string]: {
        followers: Set<string>,
        following: Set<string>
    }
}

@Injectable()
export class FollowsRepo {
    private followsRepo: followsRepo = {};

    public addFollow(userProfileId: string, followingProfileId: string): boolean {
        this.initFollowIfNeeded(followingProfileId);
        this.initFollowIfNeeded(userProfileId);

        try {
            this.followsRepo[followingProfileId].followers.add(userProfileId);
            this.followsRepo[userProfileId].following.add(followingProfileId);
        } catch(ex) {
            return false;
        }
        
        return true;
    }

    public removeFollow(userProfileId: string, unfollowingProfileId: string): boolean {
        // Should be as a transaction
        this.initFollowIfNeeded(userProfileId);
        this.initFollowIfNeeded(unfollowingProfileId);
        try {
            this.followsRepo[unfollowingProfileId].followers.delete(userProfileId);
            this.followsRepo[userProfileId].following.delete(unfollowingProfileId);
        } catch(ex) {
            return false;
        }
        return true;
    }

    public getFollowing(userProfileId: string): Set<string> {
        this.initFollowIfNeeded(userProfileId);
        return this.followsRepo[userProfileId].followers;
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
