import { ApiProperty } from "@nestjs/swagger";

export class FollowersDto {
    @ApiProperty()
    followers: Array<number>;
}
