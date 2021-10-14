import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Follow {
    @Field(() => String)
    profileId: string;

    @Field(() => [String])
    following: Array<string>;
    
    @Field(() => [String])
    followers: Array<string>;
}