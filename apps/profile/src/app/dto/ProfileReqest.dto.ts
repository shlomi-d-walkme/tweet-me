import { ApiProperty } from "@nestjs/swagger";
import { Profile } from "../entities/Profile.model";

export class ProfileRequest implements Partial<Profile> {
    @ApiProperty()
    userName:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name:string;
}