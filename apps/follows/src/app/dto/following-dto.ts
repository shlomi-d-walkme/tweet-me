import { ApiProperty } from "@nestjs/swagger";
import { mongoose } from "@typegoose/typegoose";
import { Follows } from "../models/follows.model";

export class FollowingDto {
    constructor(arg:FollowingDto) {
        Object.assign(this, arg);
    }
    
    @ApiProperty({type:[String]})
    following: string[];

    @ApiProperty({type:String})
    profileId: string;
}
