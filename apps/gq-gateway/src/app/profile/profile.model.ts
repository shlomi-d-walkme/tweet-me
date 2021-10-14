import { ObjectType, Field, ID , InputType} from '@nestjs/graphql';
import {ProfileRequest} from '@tweet-me/sdk/profile-sdk';

@ObjectType()
export class Profile {
    @Field()
    userName:string;

    @Field()
    email:string;

    @Field()
    name:string;

    @Field(() => ID)
    _id:string;

    @Field()
    creationDate:Date;

    @Field()
    password: string;
}

@InputType()
export class ProfileInput implements ProfileRequest {
    @Field()
    userName:string;

    @Field()
    email:string;

    @Field()
    name:string;

    @Field()
    password: string;
}