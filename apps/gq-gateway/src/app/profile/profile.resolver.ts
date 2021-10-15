import { UseFilters } from "@nestjs/common";
import { Resolver, Args, Mutation, Query } from "@nestjs/graphql";
import { CustomGqlExceptionFilter } from "./GqlException.filter";
import { ProfileSdkService } from "./profile-sdk/profile-sdk.service";
import { ProfileInput, Profile } from "./profile.model";
import { ProfileModule } from "./profile.module";

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(private sdk: ProfileSdkService) {}

  @Query(() => Profile)
  async profile(@Args("id", { type: () => String }) id: string) {
    return this.sdk.api.getProfile(id);
  }

  @Query(() => [Profile])
  async allProfiles() {
    const a = await this.sdk.api.getProfiles();
    return a.data;
  }

  @Mutation(() => Profile)
  @UseFilters(new CustomGqlExceptionFilter())
  async register(@Args('input') input: ProfileInput) {
    const {data} = await this.sdk.api.register(input); 
    return data;
 }
}
