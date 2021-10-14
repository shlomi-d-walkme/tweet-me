import { Injectable } from '@nestjs/common';
import { DefaultApi as FeedPresentationApi, Configuration } from '@tweet-me/sdk/feed-sdk'


@Injectable()
export class FeedsService {
    private feedPresentationApi :FeedPresentationApi;
    constructor(){
        this.feedPresentationApi = new FeedPresentationApi(new Configuration({basePath: 'http://localhost:3333'}));
    }

    async getFeed(){
        return this.feedPresentationApi.getFeed();
    }
}
