import { ApiProperty } from '@nestjs/swagger';

export class FeedDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    tweets: any[];

  
}
