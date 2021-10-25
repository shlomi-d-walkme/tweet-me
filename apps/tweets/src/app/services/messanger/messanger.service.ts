import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, logLevel, Partitioners } from "kafkajs";
import { Tweets } from '../../controllers/tweets.controller';
import { TweetsDto } from '../../dto/tweets-dto';

@Injectable()
export class MessangerService implements OnModuleInit {
    private producer;

    constructor() {
        const kafka = new Kafka({ logLevel: logLevel.ERROR, brokers: ['localhost:9092']});
        this.producer = kafka.producer({
            createPartitioner: Partitioners.JavaCompatiblePartitioner
        });
    }

    async onModuleInit(){
        await this.producer.connect();
    }
    
    public async sendMsg(key: string, actionType: ActionType, data?: TweetsDto) {
        await this.producer.send({
            topic: 'tweets',
            messages: [
                { key, value: { actionType, data } }
            ],
            acks: -1,
        });
    }   
}

export enum ActionType {
    tweetCreated,
    tweetDeleted,
    tweetUpdate
}