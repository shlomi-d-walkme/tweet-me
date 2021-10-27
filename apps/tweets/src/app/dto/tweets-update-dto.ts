import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsNotEmpty, IsNumber } from "class-validator";

export class TweetsUpdateDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    tweetId: string

    @ApiProperty({type: String})
    @IsNotEmpty()
    content: string
}
