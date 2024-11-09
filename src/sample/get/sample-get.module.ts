/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
import { Module } from '@nestjs/common';
import { SampleGetAsyncServiceImpl } from './service/sample-get-async.service';
import { SampleGetSyncServiceImpl } from './service/sample-get-sync.service';

@Module({
  controllers: [],
  providers:[
    {
      provide:'SampleGetAsyncServiceImpl',
      useClass:SampleGetAsyncServiceImpl
    },
    {
      provide:'SampleGetSyncServiceImpl',
      useClass:SampleGetSyncServiceImpl
    },
  ],
  exports:[
    {
        provide:'SampleGetAsyncServiceImpl',
        useClass:SampleGetAsyncServiceImpl
      },
      {
        provide:'SampleGetSyncServiceImpl',
        useClass:SampleGetSyncServiceImpl
      },
  ]
})
export class SampleGetModule {}
