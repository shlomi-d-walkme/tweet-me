import { Kafka, Partitioners } from 'kafkajs'

console.log('Hello World!');
const main = async () => {
    const kafka = new Kafka({ brokers: ["localhost:9092"]});
    const producer = kafka.producer({
        createPartitioner: Partitioners.JavaCompatiblePartitioner
    });


};

main().then();