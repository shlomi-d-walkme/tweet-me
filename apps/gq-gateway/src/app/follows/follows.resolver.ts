import { Args, Parent, Query, Resolver, ResolveField } from "@nestjs/graphql";
import { Follow } from "./follows.model";
import fetch from 'cross-fetch';

@Resolver(of => Follow)
export class FollowsResolver {

    @ResolveField()
    followers(@Parent() follow) {
        const { profileId } = follow

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        fetch(`http://localhost:5555/api/follows/${profileId}/followers`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    return result.followers
                },
                (error) => {
                    console.log("ERROR" + error);
                }
            );
    }

    @Query(() => Follow)
    async getFollowInfo(@Args('profileId', { type: () => String }) profileId: string) {
        return { profileId }
    }
}