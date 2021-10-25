import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, logLevel, Partitioners } from "kafkajs";
import { Tweets } from '../../controllers/tweets.controller';
import { TweetsDto } from '../../dto/tweets-dto';
import { ActionType as TWEETS_ACTION } from 'libs/api-interfaces/src/lib/tweets-model';

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
    
    public async sendMsg(key: string, actionType: TWEETS_ACTION, data?: TweetsDto) {
        await this.producer.send({
            topic: 'tweets',
            messages: [
                { key, value: JSON.stringify({ actionType, data }) }
            ],
            acks: -1,
        });
    }   
}