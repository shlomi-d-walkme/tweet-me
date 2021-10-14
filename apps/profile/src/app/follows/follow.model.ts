import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Follow {
    @Field()
    following: Array<string>;
}