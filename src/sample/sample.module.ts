import { Module } from '@nestjs/common';
import { SamplePostModule } from './post/sample-post.module';
import { SamplePatchModule } from './patch/sample-patch.module';
import { SamplePutModule } from './put/sample-put.module';
import { APP_FILTER } from '@nestjs/core';
import { SampleController } from './sample.controller';
import { SampleDeleteModule } from './delete/sample-delete.module';
import { GlobalExceptionHandler } from 'src/exception/global';
import { ConfigModule } from '@nestjs/config';
import { SampleGetModule } from './get/sample-get.module';
import { ServiceFactory } from 'src/factory/sample.factory';


@Module({
  imports:[
    ConfigModule.forRoot({isGlobal:true}),
    SamplePostModule,
    SamplePatchModule,
    SamplePutModule,
    SampleDeleteModule,
    SampleGetModule
  ],
  controllers: [SampleController],
  providers: [
    ServiceFactory,
    {
      provide: 'IRequestHandler',
      useFactory: (factory: ServiceFactory) => factory.create(),
      inject: [ServiceFactory],
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionHandler,
    },
  ],
})
export class SampleModule {}
