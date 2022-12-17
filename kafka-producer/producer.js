import {Kafka} from 'kafkajs';
import {randomUUID} from 'node:crypto'

async function bootstrap(){
  const kafka=new Kafka({
  clientId: 'kafka-producer',
  brokers: ['rested-warthog-6488-us1-kafka.upstash.io:9092'],
  sasl: {
    mechanism: 'scram-sha-256',
    username: 'cmVzdGVkLXdhcnRob2ctNjQ4OCQd1YUreRci5LwuVwK90WMPmmqFgGQTl5kdkkE',
    password: 'sGoDGc9LomBhuUs_xSrepCGy84t2eD8xr79m8cyziKVj_bGwqniu1L9lIm3uV2LeYjKe-w==',
  },
  ssl: true,
  })

  const  producer = kafka.producer()

  await producer.connect()

  await producer.send({
    topic: "notification.send-kafka",
    messages:[
      {
        value: JSON.stringify({
          content: 'Nova Solicitação de amizade!',
          category: 'Social',
          recipientId: randomUUID(),
        })
      }
    ]
  })
  await producer.disconnect()
}

bootstrap()