import { Injectable} from '@nestjs/common';
import {Kafka, Partitioners} from 'kafkajs';
import {EachMessagePayload} from "@nestjs/microservices/external/kafka.interface";

@Injectable()
export class MessagingService {

  private readonly config: MessagingConfig
  private readonly kafka: Kafka

  constructor() {
    this.config = {
      clientId: process.env.SERVICE_NAME || 'please-set-your-service-name',
      brokers: [ 'localhost:9092' ],
    }
    const { clientId, brokers } = this.config;
    this.kafka = new Kafka({
      clientId,
      brokers,
    })
  }

  async produce<T>(topic: string, key: string,  content: T | T[], writeConcern?: WriteConcern): Promise<Closer> {
    const convert = (message: T) => ({
      key: key,
      value: JSON.stringify(message),
    })

    const producer = this.kafka.producer({
      createPartitioner: Partitioners.JavaCompatiblePartitioner
    })

    await producer.connect();
    await producer.send({
      topic,
      messages: Array.isArray(content) ? content.map(convert) : [convert(content)],
      acks: writeConcern?.valueOf(),
    })

    return {
      close: producer.disconnect
    }
  }

  async consume<T>(topic: string, processor: (message: T) => Promise<void>, fromBeginning?: boolean, onError?: (reason: any) => PromiseLike<never>): Promise<Closer> {
    const consumer = this.kafka.consumer({
      groupId: `${process.env.SERVICE_NAME}-${topic}`
    })

    await consumer.connect();

    await consumer.subscribe({
      topic: topic,
      fromBeginning: fromBeginning,
    })

    consumer.run({
      eachMessage: async (payload: EachMessagePayload) => {
        console.log(`Incoming message in ${topic} [${payload.partition}]`)
        const messageAsT = JSON.parse(payload.message.value.toString()) as T
        await processor(messageAsT)
      },
    }).catch(onError)

    return {
      close: consumer.disconnect
    }
  }
}

export enum WriteConcern {
  ISR = -1,
  FireAndForget = 0,
  LeaderOnly = 1,
}

export class MessagingConfig {
  clientId: string
  brokers: string[]
}

export interface Closer {
  close: () => Promise<void>
}
