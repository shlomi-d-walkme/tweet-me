import { Injectable } from '@nestjs/common';
import { KafkaFollowsServerService } from './kafka-follows-server.service';

@Injectable()
export class FollowsMessageProvider {
    constructor(private kafkaService: KafkaFollowsServerService) {}

    followNotifier(profileId: string, followId: string) {
        this.kafkaService.sendMessage([{ key: profileId, value: { profileId: followId, action: "FOLLOW" }}]);
    }

    unfollowNotifier(profileId: string, unfollowId: string) {
        this.kafkaService.sendMessage([{ key: profileId, value: { profileId: unfollowId, action: "UNFOLLOW" }}]);
    }
}