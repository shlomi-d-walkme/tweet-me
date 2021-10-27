import { Injectable } from "@nestjs/common";
import { FeedDto } from "./feed-dto";
import { FeedDbService } from "@tweet-me/feed-model";

@Injectable()
export class FeedService {
  constructor(private feedDbService: FeedDbService) {}
  async findAll():Promise<FeedDto> {
    const profileId = "Moshe";
    return {
      tweets:  (await this.feedDbService.getTweets(profileId)).map(d => ({
        id: d.tweetId,
        content: d.content,
        authorId: 'NOT YET',
        authorName: 'NOT YET',        
        date: d.creationDate
      })),
      id: profileId,
    };
  }


}
