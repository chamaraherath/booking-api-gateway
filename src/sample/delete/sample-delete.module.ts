import { Module } from '@nestjs/common';
import { SampleDeleteAsyncServiceImpl } from './service/sample-delete-async.service';
import { SampleDeleteSyncServiceImpl } from './service/sample-delete-sync.service';

@Module({
  controllers: [],
  providers:[
    {
      provide:'SampleDeleteAsyncServiceImpl',
      useClass:SampleDeleteAsyncServiceImpl
    },
    {
      provide:'SampleDeleteSyncServiceImpl',
      useClass:SampleDeleteSyncServiceImpl
    },
  ],
  exports:[
    {
      provide:'SampleDeleteAsyncServiceImpl',
      useClass:SampleDeleteAsyncServiceImpl
    },
    {
      provide:'SampleDeleteSyncServiceImpl',
      useClass:SampleDeleteSyncServiceImpl
    },
  ]
})
export class SampleDeleteModule {}
