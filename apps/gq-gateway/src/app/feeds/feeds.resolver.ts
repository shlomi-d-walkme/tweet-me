import { Resolver, Query, Args, Parent } from '@nestjs/graphql';
import { Feed } from './feeds.model';
import { FeedsService } from './feeds.service';

@Resolver()
export class FeedsResolver {
 
      constructor(private feedsService: FeedsService){

      }

      @Query(returns => Feed)
      async feed(@Args('id') id: string ) {
        const res =  await this.feedsService.getFeed(id)
        return res.data;
      }
    
    //   @ResolveField()
    //   async posts(@Parent() author) {
    //     const { id } = author;
    //     return this.postsService.findAll({ authorId: id });
    //   }
}
