import { ApiProperty } from "@nestjs/swagger";
import { mongoose } from "@typegoose/typegoose";
import { Follows } from "../models/follows.model";

export class FollowingDto implements Pick<Follows, 'following'> {
    constructor(arg:FollowingDto) {
        Object.assign(this, arg);
    }
    
    @ApiProperty({type:[String]})
    following: mongoose.Types.Array<string>;
}
