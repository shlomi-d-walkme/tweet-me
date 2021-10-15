import { ApiProperty } from '@nestjs/swagger';

type FeedTweet = {
    id: string;
    content: string;
    authorId: string;
    authorName: string;
    date: Date;
}

export class FeedDto {


    @ApiProperty()
    id: string;

    @ApiProperty()
    tweets: FeedTweet[];

  
}
