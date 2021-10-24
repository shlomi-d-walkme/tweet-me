import { ApiResponseProperty } from '@nestjs/swagger';

class FeedTweet {
    @ApiResponseProperty()
    id: string;
    @ApiResponseProperty()
    content: string;
    @ApiResponseProperty()
    authorId: string;
    @ApiResponseProperty()
    authorName: string;
    @ApiResponseProperty({type: Date})
    date: Date;
}

export class FeedDto {


    @ApiResponseProperty()
    id: string;

    @ApiResponseProperty({type: [FeedTweet]})
    tweets: FeedTweet[];

  
}
