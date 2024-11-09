import { Module } from '@nestjs/common';
import { SamplePatchAsyncServiceImpl } from './service/sample-patch-async.service';
import { SamplePatchSyncServiceImpl } from './service/sample-patch-sync.service';

@Module({
  providers:[
    {
      provide:'SamplePatchAsyncServiceImpl',
      useClass:SamplePatchAsyncServiceImpl
    },
    {
      provide:'SamplePatchSyncServiceImpl',
      useClass:SamplePatchSyncServiceImpl
    },
  ],
  exports:[
    {
      provide:'SamplePatchAsyncServiceImpl',
      useClass:SamplePatchAsyncServiceImpl
    },
    {
      provide:'SamplePatchSyncServiceImpl',
      useClass:SamplePatchSyncServiceImpl
    },
  ]
})
export class SamplePatchModule {}
