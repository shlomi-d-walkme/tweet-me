import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsNotEmpty, IsNumber } from "class-validator";

export class TweetsDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    id: string

    @ApiProperty({type: String})
    @IsNotEmpty()
    profileId: string

    @ApiProperty({type: String})
    @IsNotEmpty()
    content: string

    @ApiProperty({type: Date})
    @IsNotEmpty()
    @IsDate()
    date: Date

    @ApiProperty({type: String})
    parentId: string
}
