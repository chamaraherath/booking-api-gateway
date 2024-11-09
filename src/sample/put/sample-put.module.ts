import { Module } from '@nestjs/common';
import { SamplePutAsyncServiceImpl } from './service/sample-put-async.service';
import { SamplePutSyncServiceImpl } from './service/sample-put-sync.service';

@Module({
  controllers: [],
  providers:[
    {
      provide:'SamplePutAsyncServiceImpl',
      useClass:SamplePutAsyncServiceImpl
    },
    {
      provide:'SamplePutSyncServiceImpl',
      useClass:SamplePutSyncServiceImpl
    },
  ],
  exports:[
    {
      provide:'SamplePutAsyncServiceImpl',
      useClass:SamplePutAsyncServiceImpl
    },
    {
      provide:'SamplePutSyncServiceImpl',
      useClass:SamplePutSyncServiceImpl
    },
  ]
})
export class SamplePutModule {}
