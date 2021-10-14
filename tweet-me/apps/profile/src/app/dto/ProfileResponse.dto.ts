import { ApiResponseProperty } from "@nestjs/swagger";
import { Profile } from "../entities/Profile.model";

export class ProfileResponse implements Partial<Profile> {
    @ApiResponseProperty()
    userName:string;

    @ApiResponseProperty()
    email:string;

    @ApiResponseProperty()
    name:string;

    @ApiResponseProperty()
    _id:string;

    @ApiResponseProperty()
    creationDate:Date;
}