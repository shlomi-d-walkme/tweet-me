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
    const res =  await this.sdk.api.getProfile(id);
    return res.data
  }

  @Query(() => Profile)
  async profileByEmail(@Args("email", { type: () => String }) email: string) {
    const res =  await this.sdk.api.getProfileByEmail(email);
    return res.data
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
