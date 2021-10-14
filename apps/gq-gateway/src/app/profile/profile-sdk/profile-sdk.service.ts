import { Injectable } from '@nestjs/common';
import { DefaultApi, Configuration } from '@tweet-me/sdk/profile-sdk';

@Injectable()
export class ProfileSdkService {
    api: DefaultApi;

    constructor() {
        this.api = new DefaultApi(new Configuration({basePath: "http://localhost:666"}));
    }
}
