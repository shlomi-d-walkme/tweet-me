import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Tweet {
  @Field(type => String)
  id: string;

  @Field(type => String)
  content: string;

  @Field(type => Date)
  date: Date;

  // @Field(type => String)
  // parentId: string;
}