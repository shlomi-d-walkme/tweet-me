import { Kafka, Partitioners } from 'kafkajs'

console.log('Hello World!');
const main = async () => {
    const kafka = new Kafka({ brokers: ["localhost:9092"]});
    const producer = kafka.producer({
        createPartitioner: Partitioners.JavaCompatiblePartitioner
    });

    await producer.connect();
    await producer.send({
        topic: 'tweets',
        messages: [
            { key: 'user1', value: 'Whats upppp' },
            { key: 'user2', value: 'All goooooodddd' }
        ]
    })
};

main().then();