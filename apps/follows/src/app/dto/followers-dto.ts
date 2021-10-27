import { ApiProperty } from "@nestjs/swagger";
import { mongoose } from "@typegoose/typegoose";
import { Follows } from "../models/follows.model";

export class FollowersDto implements Pick<Follows, 'followers'> {
    constructor(arg:FollowersDto) {
        Object.assign(this, arg);
    }

    @ApiProperty({type:[String]})
    followers: mongoose.Types.Array<string>;
}
