import { Injectable } from '@nestjs/common';
import { KafkaFollowsServerService } from './kafka-follows-server.service';
import { FOLLOWS_ACTION, FollowsKafkaModel } from 'libs/api-interfaces/src/lib/follows-kafka-model';

@Injectable()
export class FollowsMessageProvider {
    constructor(private kafkaService: KafkaFollowsServerService) {}

    followNotifier(profileId: string, followProfileId: string) {
        const followModel = new FollowsKafkaModel(followProfileId, profileId, FOLLOWS_ACTION.FOLLOW);
        this.kafkaService.sendMessage([{ key: profileId, value: JSON.stringify(followModel)}]);
    }

    unfollowNotifier(profileId: string, unfollowProfileId: string) {
        const followModel = new FollowsKafkaModel(unfollowProfileId, profileId, FOLLOWS_ACTION.UNFOLLOW);
        this.kafkaService.sendMessage([{ key: profileId, value: JSON.stringify(followModel)}]);
    }
}