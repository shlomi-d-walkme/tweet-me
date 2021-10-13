import { Injectable } from '@nestjs/common';

interface followsRepo {
    [profileId: string]: {
        followers: Set<string>,
        following: Set<string>
    }
}

@Injectable()
export class FollowsRepo {
    followsRepo: followsRepo = {};

    public addFollow(userProfileId: string, profileId: string): boolean {
        this.initFollowIfNeeded(profileId);
        this.initFollowIfNeeded(userProfileId);

        try {
            this.followsRepo[profileId].followers.add(profileId);
            this.followsRepo[userProfileId].following.add(profileId);
        } catch(ex) {
            return false;
        }
        
        return true;
    }

    public removeFollow(userProfileId: string, profileId: string): boolean {
        // Should be as a transaction
        try {
            this.followsRepo[profileId].followers.delete(profileId);
            this.followsRepo[userProfileId].following.delete(profileId);
        } catch(ex) {
            return false;
        }
        return true;
    }

    public getFollowing(userProfileId: string): Set<string> {
        return this.followsRepo[userProfileId].followers;
    }

    public getFollowers(userProfileId: string): Set<string> {
        return this.followsRepo[userProfileId].followers;
    }

    private initFollowIfNeeded(profileId: string): void {
        if(!this.followsRepo[profileId]) {
            this.followsRepo[profileId] = { followers: new Set<string>(), following: new Set<string>()};
        }
    }
}
