import { Injectable } from '@nestjs/common';
import { KafkaFollowsServerService } from './kafka-follows-server.service';
import { FOLLOWS_ACTION, FollowsKafkaModel } from 'libs/api-interfaces/src/lib/follows-kafka-model';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Injectable()
export class FollowsMessageProvider {
    // constructor(private kafkaService: KafkaFollowsServerService) {}
    constructor(private messagingService : MessagingService) {

    }

    public async followNotifier(profileId: string, followProfileId: string) {
        const followModel = new FollowsKafkaModel(followProfileId, FOLLOWS_ACTION.FOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', followModel, profileId);
    }

    public async unfollowNotifier(profileId: string, unfollowProfileId: string) {
        const followModel = new FollowsKafkaModel(unfollowProfileId, FOLLOWS_ACTION.UNFOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', followModel, profileId);
    }
}