import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsNotEmpty, IsNumber } from "class-validator";

export class TweetsDto {
    @ApiProperty()
    @IsNotEmpty()
    id: string

    @ApiProperty()
    @IsNotEmpty()
    profileId: string

    @ApiProperty()
    @IsNotEmpty()
    content: string

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    date: Date

    @ApiProperty()
    parentId: string
}
