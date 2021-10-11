import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class FollowProfileDto {
    @ApiProperty()
    @IsNumber()
    profileId: number
}
