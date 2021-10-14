import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
import { Feed } from './feeds.model';

@Resolver()
export class FeedsResolver {

    constructor(
        
      ) {}
    
      @Query(returns => Feed)
      async feed(@Args('id') id: string ) {
        return {tweets: []};
      }
    
    //   @ResolveField()
    //   async posts(@Parent() author) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    //   }
}
