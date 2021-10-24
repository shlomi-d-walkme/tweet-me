import { Kafka, logLevel } from 'kafkajs'

console.log('Hello World!');

const main = async() => {
    const kafka = new Kafka({ logLevel: logLevel.ERROR, brokers: ["localhost:9092"]});
    const consumer = kafka.consumer({ groupId: 'my-microservice-group'});
    await consumer.connect();
    await consumer.subscribe({ topic: 'follows', fromBeginning: true });
    await consumer.run({
        autoCommit: true,
        eachMessage: async (payload) => {
            const messageBody = JSON.stringify(payload.message.value);
            console.log(`messageBody:${messageBody}`);
        } 
    })
}

main().then();