import {Injectable} from '@nestjs/common';
import {FOLLOWS_ACTION, FollowsKafkaModel} from '@tweet-me/api-interfaces';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Injectable()
export class FollowsMessageProvider {
    constructor(private readonly messagingService : MessagingService) {}

    public async followNotifier(profileId: string, followProfileId: string) {
        const followModel = new FollowsKafkaModel(followProfileId, profileId, FOLLOWS_ACTION.FOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', profileId, followModel);
    }

    public async unfollowNotifier(profileId: string, unfollowProfileId: string) {
        const followModel = new FollowsKafkaModel(unfollowProfileId, profileId, FOLLOWS_ACTION.UNFOLLOW);
        await this.messagingService.produce<FollowsKafkaModel>('follows', profileId, followModel);
    }
}
