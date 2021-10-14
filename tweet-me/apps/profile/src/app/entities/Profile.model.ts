import { prop, getModelForClass } from '@typegoose/typegoose'

export class Profile {
    @prop({
        require: true,
        unique: true,
    })
    userName: string;

    @prop()
    name: string;

    @prop({
        select: false,
    })
    password: string;

    @prop({
        default: () => Date.now()
    })
    creationDate: Date;

    @prop({
        unique: true,
    })
    email: string;
}

export const ProfileModel = getModelForClass(Profile);
