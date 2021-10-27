import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsNotEmpty, IsNumber } from "class-validator";

export class TweetsDeleteDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    tweetId: string
}
