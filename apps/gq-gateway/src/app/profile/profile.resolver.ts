import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { ProfileInput, Profile } from './profile.model';



@Resolver(of => Profile)
export class ProfileResolver {

    @Query(() => Profile)
    async profile(@Args('id', { type:() => String }) id: string){
        return null; //call server
    }

    @Mutation(returns => Profile)
    async registerProfile(@Args('input') input: ProfileInput) {
        return null; //cal server
    }
}