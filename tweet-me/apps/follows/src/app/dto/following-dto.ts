import { ApiProperty } from "@nestjs/swagger";

export class FollowingDto {
    @ApiProperty({type:[Number]})
    following: Array<number>;
}
