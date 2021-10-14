import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Tweet } from '../tweets/tweets.model';

@ObjectType()
export class Feed {

  @Field(()=>ID)
  id: string;

   @Field(type=>[Tweet])
   tweets: Tweet[];
}

