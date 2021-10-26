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


  async seed(forProfileId:string) {

      await this.feedDbService.createFeedTweetes([1,2,3,4,5].map(n => ({
       comments: n, content: `abc ${n}`, creationDate:new Date(), feedOwnerId:forProfileId, tweetId: `${forProfileId}_${n}` 
      })));

  }
}
