import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SamplePostAsyncServiceImpl } from './service/sample-post-async.service';
import { SamplePostSyncServiceImpl } from './service/sample-post-sync.service';

@Module({
    imports:[
        ClientsModule.register([
            {
              name: 'API-GATEWAY',
              transport: Transport.KAFKA,
              options: {
                client: {
                  clientId: 'sample-ox',
                  brokers: ['kafka-service.opusxenta.svc.cluster.local:9092'],
                }
              },
            },
          ])
    ],
    providers:[
      {
        provide:'SamplePostAsyncServiceImpl',
        useClass:SamplePostAsyncServiceImpl
      },
      {
        provide:'SamplePostSyncServiceImpl',
        useClass:SamplePostSyncServiceImpl
      },
    ],
    exports:[
      {
        provide:'SamplePostAsyncServiceImpl',
        useClass:SamplePostAsyncServiceImpl
      },
      {
        provide:'SamplePostSyncServiceImpl',
        useClass:SamplePostSyncServiceImpl
      },
      ClientsModule
    ]
})
export class SamplePostModule {
}
