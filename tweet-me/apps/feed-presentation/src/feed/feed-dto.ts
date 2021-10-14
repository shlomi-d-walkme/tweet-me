import { ApiProperty } from '@nestjs/swagger';

type FeedTweet = {
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
