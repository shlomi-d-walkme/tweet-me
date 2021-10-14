import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Tweet } from './tweets.model'
import fetch from 'cross-fetch';

@Resolver(of => Tweet)
export class TweetsResolver {
@Query(returns => Tweet)
  async tweet(@Args('id', { type: () => String }) id: string) {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        return fetch(`http://localhost:4444/api/tweets/${id}/`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("MyLog", id, result);
                    return result;
                },
                (error) => {
                    console.log("ERROR" + error);
                }
            );
  }

  //@ResolveField(of => Tweet)
  //async posts(@Parent() tweet: Tweet) {
    //const { id } = tweet;
    //return this.postsService.findAll({ authorId: id });
  //}
}
