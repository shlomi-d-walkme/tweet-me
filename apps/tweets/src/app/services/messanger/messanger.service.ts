import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, logLevel, Partitioners } from "kafkajs";
import { Tweets } from '../../controllers/tweets.controller';
import { TweetsDto } from '../../dto/tweets-dto';
import { TweetsDto as KafkaTweet } from '@sdk/tweets-sdk';

import { ActionType, TweetKafkaModel } from '@tweet-me/api-interfaces';
import {MessagingService} from '@tweet-me/shared/kafka-infra';


@Injectable()
export class MessangerService {
    private producer;

    constructor(private messagingService : MessagingService) {

    }

    public async sendMsg(key: string, actionType: ActionType, data?: TweetsDto) {
        console.log("is is the messenger sending a tweet");
        const {id, profileId, content, date, parentId} = data;
        await this.messagingService.produce<TweetKafkaModel>('tweets', {action: actionType, tweet: { id, profileId, content, date: date.toString(), parentId}});
           
            // messages: [
            //     { key, value: JSON.stringify({ actionType, data }) }
            // ],
            // acks: -1,
       // });
    }   
}