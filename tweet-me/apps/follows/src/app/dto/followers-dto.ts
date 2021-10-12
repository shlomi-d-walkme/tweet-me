import { ApiProperty } from "@nestjs/swagger";

export class FollowersDto {
    @ApiProperty({type:[String]})
    followers: Array<string>;
}
