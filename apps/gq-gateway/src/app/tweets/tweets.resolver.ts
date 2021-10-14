import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Tweet } from './tweets.model'

@Resolver(of => Tweet)
export class TweetsResolver {
@Query(returns => Tweet)
  async tweet(@Args('id', { type: () => String }) id: string) {
    //return this.authorsService.findOneById(id);
  }

  //@ResolveField(of => Tweet)
  //async posts(@Parent() tweet: Tweet) {
    //const { id } = tweet;
    //return this.postsService.findAll({ authorId: id });
  //}
}
