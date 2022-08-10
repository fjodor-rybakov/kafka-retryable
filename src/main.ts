import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ClientKafka,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: 'my-client-id',
          brokers: ['localhost:9092'],
        },
        consumer: {
          groupId: 'my-group-id',
        },
      },
    },
  );
  await app.listen();

  // 1. Send event to kafka
  app.get<ClientKafka>('TEST_CLIENT').emit('hero.events', {});
}
bootstrap();
