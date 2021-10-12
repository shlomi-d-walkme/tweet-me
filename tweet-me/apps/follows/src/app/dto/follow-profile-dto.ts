import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class FollowProfileDto {
    @ApiProperty()
    @IsNumber()
    profileId: number;
}
