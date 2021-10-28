import { Args, Parent, Query, Resolver, ResolveField, Mutation } from "@nestjs/graphql";
import { Follow } from "./follows.model";

import { FollowsService } from "./follows.service";

@Resolver(of => Follow)
export class FollowsResolver {

    constructor(private followsService: FollowsService){}

    @ResolveField()
    async followers(@Parent() follow:Follow) {
        const { profileId } = follow
        console.log(`In graphQL gateway profileId = ${profileId}`);
        const result = await this.followsService.api.followsControllerGetFollowersByUser(profileId);
        console.log('In GraphQL gateway after API ${result.data.followers}');
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

    @Mutation(() => Following)
    async followUser(@Args('profileId', { type: () => String }) profileId: string ,
                        @Args('followProfileId', { type: () => String }) followProfileId: string)  {
        const result = await this.followsService.api.followsControllerFollow(profileId, followProfileId);
        return result.data;
    }

    @Mutation(() => Boolean)
    async unfollowUser(@Args('profileId', { type: () => String }) profileId: string ,
                    @Args('unfollowProfileId', { type: () => String }) unfollowProfileId: string)  {
        const result = await this.followsService.api.followsControllerUnfollow(profileId, unfollowProfileId);
        return result.data;
    }
    
}