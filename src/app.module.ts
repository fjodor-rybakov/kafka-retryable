import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST_CLIENT',
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
    ]),
  ],
  controllers: [HeroesController],
})
export class AppModule {}
