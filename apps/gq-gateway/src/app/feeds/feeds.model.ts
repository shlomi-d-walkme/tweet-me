import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Feed {

  @Field(()=>ID)
  id: string;

  // @Field(type=>[Tweet])
  // tweets: Tweet[];
  @Field(type=>[String])
  
  tweets: string[];
}

