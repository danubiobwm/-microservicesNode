import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "notifications",
        brokers: ["rested-warthog-6488-us1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username:
            "cmVzdGVkLXdhcnRob2ctNjQ4OCQd1YUreRci5LwuVwK90WMPmmqFgGQTl5kdkkE",
          password:
            "sGoDGc9LomBhuUs_xSrepCGy84t2eD8xr79m8cyziKVj_bGwqniu1L9lIm3uV2LeYjKe-w==",
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
