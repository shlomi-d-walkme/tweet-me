import { Injectable } from '@nestjs/common';
import { KafkaFollowsServerService } from './kafka-follows-server.service';
import { FOLLOWS_ACTION, FollowsKafkaModel } from '@tweet-me/api-interfaces';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Injectable()
export class FollowsMessageProvider {
    constructor(private messagingService : MessagingService) {}

    public async followNotifier(profileId: string, followProfileId: string) {
        const followModel = new FollowsKafkaModel(followProfileId, profileId, FOLLOWS_ACTION.FOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', followModel, profileId);
    }

    public async unfollowNotifier(profileId: string, unfollowProfileId: string) {
        const followModel = new FollowsKafkaModel(unfollowProfileId, profileId, FOLLOWS_ACTION.UNFOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', followModel, profileId);
    }
}
