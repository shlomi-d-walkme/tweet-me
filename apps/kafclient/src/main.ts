import { Kafka, logLevel } from 'kafkajs'

console.log('Hello World!');

const main = async() => {
    const kafka = new Kafka({ logLevel: logLevel.ERROR, brokers: ["localhost:9092"]});
    const consumer = kafka.consumer({ groupId: 'my-microservice-group2'});
    await consumer.connect();
    await consumer.subscribe({ topic: 'tweets', fromBeginning: true });
    await consumer.run({
        autoCommit: true,
        eachMessage: async (payload) => {
            const messageBody = payload.message.value.toString();
            console.log(messageBody);
        } 
    })
}

main().then();