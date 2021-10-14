import { ApiProperty } from "@nestjs/swagger";

export class FollowingDto {
    @ApiProperty({type:[String]})
    following: Array<string>;
}
