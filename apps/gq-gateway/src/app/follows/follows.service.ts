import { Injectable } from '@nestjs/common';
import { Configuration, DefaultApi } from '@tweet-me/sdk/follows-sdk';

@Injectable()
export class FollowsService {
    api = new DefaultApi(new Configuration({basePath: 'http://localhost:5555'}));
}
