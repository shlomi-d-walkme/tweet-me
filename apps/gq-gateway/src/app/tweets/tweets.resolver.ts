import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Tweet } from './tweets.model'
import fetch from 'cross-fetch';
import { TweetsService } from './tweets.service';

@Resolver(of => Tweet)
export class TweetsResolver {

    constructor(private tweetssService:TweetsService) {
    }

    @Query(returns => [Tweet])
    async tweet(@Args('id', { type: () => String }) id: string) {
        const result = await this.tweetssService.api.tweetsGetTweets(id);
        return result.data;
    }

    @Mutation(returns => Tweet)
    async addTweet(@Args('profileId', { type: () => String }) profileId: string,
                   @Args('content', { type: () => String }) content: string,
                   @Args('parentId', { type: () => String }) parentId: string)  {
        // const result = await this.followsService.api.followsControllerFollow(profileId, followProfileId);
        // return result.data;
        console.log("start add tweet", content);
        const result = await this.tweetssService.api.tweetsAddTweet({profileId, content, parentId});
        //console.log("result", result);
        //let data = (await result).data;
        console.log("DATA !!! ", result.data);
        return result.data;
    }
}
