import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tweet {
  @Field(type => String)
  id: string;

  @Field(type => String)
  content: string;

  @Field(type => String)
  date: string;

  @Field(type => String)
  parentId: string;
}