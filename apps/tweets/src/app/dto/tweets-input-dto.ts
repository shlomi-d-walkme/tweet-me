import { ApiProperty } from "@nestjs/swagger";
import { IsDate, isDate, IsNotEmpty, IsNumber } from "class-validator";

export class TweetsInputDto {
    @ApiProperty({type: String})
    @IsNotEmpty()
    profileId: string

    @ApiProperty({type: String})
    @IsNotEmpty()
    content: string

    @ApiProperty({type: String})
    parentId: string
}
