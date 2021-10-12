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

    public addFollow(userProfileId: string, profileId: string): void {
        this.initFollowIfNeeded(profileId);
        this.initFollowIfNeeded(userProfileId);

        this.followsRepo[profileId].followers.add(profileId);
        this.followsRepo[userProfileId].following.add(profileId);
    }

    public removeFollow(userProfileId: string, profileId: string): void {
        this.initFollowIfNeeded(profileId);
        this.initFollowIfNeeded(userProfileId);

        this.followsRepo[profileId].followers.delete(profileId);
        this.followsRepo[userProfileId].following.delete(profileId);
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
