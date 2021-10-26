import { Injectable } from '@nestjs/common';
import { Configuration, DefaultApi } from '@sdk/tweets-sdk';

@Injectable()
export class TweetsService {
    api = new DefaultApi(new Configuration({basePath: 'http://localhost:4444'}));
}
