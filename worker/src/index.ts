import {Kafka} from 'kafkajs'; 

const TOPIC_NAME = "quickstart-events";
const client = new PrismaClient();

const kafka = new Kafka({
  clientId: "outbox-run",
  brokers: ["localhost:9092"],
});

