import { Args, Parent, Query, Resolver, ResolveField } from "@nestjs/graphql";
import { Follow } from "./follows.model";
import fetch from 'cross-fetch';

import { Configuration, DefaultApi } from '@tweet-me/sdk/follows-sdk'

const api = new DefaultApi(new Configuration({basePath: 'http://localhost:5555'}))

@Resolver(of => Follow)
export class FollowsResolver {

    @ResolveField()
    async followers(@Parent() follow:Follow) {
        const { profileId } = follow
        const result = await api.followsControllerGetFollowersByUser(profileId);
        return result.data.followers;
    }

    @ResolveField()
    async following(@Parent() follow:Follow) {
        const { profileId } = follow
        const result = await api.followsControllerGetFollowingByUser(profileId);
        return result.data.following;
    }

    @Query(() => Follow)
    async getFollowInfo(@Args('profileId', { type: () => String }) profileId: string) {
        return { profileId }
    }

    
}