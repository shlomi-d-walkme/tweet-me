import {Injectable} from '@nestjs/common';
import {TweetsDto} from '../../dto/tweets-dto';

import {ActionType, TweetKafkaModel} from '@tweet-me/api-interfaces';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Injectable()
export class MessangerService {

    constructor(private readonly messagingService : MessagingService) { }

    public async sendMsg(key: string, actionType: ActionType, data?: TweetsDto) {
        const {id, profileId, content, date, parentId} = data;
        await this.messagingService.produce<TweetKafkaModel>('tweets', profileId, {action: actionType, tweet: { id, profileId, content, date: date.toString(), parentId}});
    }
}
