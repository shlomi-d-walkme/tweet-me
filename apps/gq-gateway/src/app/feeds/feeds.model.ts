import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Tweet } from '../tweets/tweets.model';

@ObjectType()
export class Feed {

   @Field(type=>[Tweet])
   tweets: Tweet[];
}

