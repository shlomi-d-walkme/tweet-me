import { Injectable } from '@nestjs/common';
import { Kafka, Partitioners } from 'kafkajs'

@Injectable()
export class KafkaFollowsServerService {
    private producer;

    constructor() {
        this.init();
    }

    private async init() {
        const kafka = new Kafka({ brokers: ["localhost:9092"]});
        this.producer = kafka.producer({
            createPartitioner: Partitioners.JavaCompatiblePartitioner,
            allowAutoTopicCreation: true
        });
    
        await this.producer.connect();
    }

    async sendMessage(messages) {
        await this.producer.send({
            topic: 'follows',
            messages: messages
        })
    }
}