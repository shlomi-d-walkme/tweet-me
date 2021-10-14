import { ObjectType, Field, ID } from '@nestjs/graphql';

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

@ObjectType()
export class ProfileInput {
    @Field()
    userName:string;

    @Field()
    email:string;

    @Field()
    name:string;

    @Field()
    password: string;
}