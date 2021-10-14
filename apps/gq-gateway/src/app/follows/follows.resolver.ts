import { Args, Parent, Query, Resolver, ResolveField } from "@nestjs/graphql";
import { Follow } from "./follows.model";

import { FollowsService } from "./follows.service";

@Resolver(of => Follow)
export class FollowsResolver {

    constructor(private followsService: FollowsService){}

    @ResolveField()
    async followers(@Parent() follow:Follow) {
        const { profileId } = follow
        const result = await this.followsService.api.followsControllerGetFollowersByUser(profileId);
        return result.data.followers;
    }

    @ResolveField()
    async following(@Parent() follow:Follow) {
        const { profileId } = follow
        const result = await this.followsService.api.followsControllerGetFollowingByUser(profileId);
        return result.data.following;
    }

    @Query(() => Follow)
    async getFollowInfo(@Args('profileId', { type: () => String }) profileId: string) {
        return { profileId }
    }

    
}