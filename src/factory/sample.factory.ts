/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { IRequestHandler } from "src/sample/core/service.interface";
import { SampleDeleteAsyncServiceImpl } from "src/sample/delete/service/sample-delete-async.service";
import { SampleDeleteSyncServiceImpl } from "src/sample/delete/service/sample-delete-sync.service";
import { SampleGetAsyncServiceImpl } from "src/sample/get/service/sample-get-async.service";
import { SampleGetSyncServiceImpl } from "src/sample/get/service/sample-get-sync.service";
import { SamplePatchAsyncServiceImpl } from "src/sample/patch/service/sample-patch-async.service";
import { SamplePatchSyncServiceImpl } from "src/sample/patch/service/sample-patch-sync.service";
import { SamplePostAsyncServiceImpl } from "src/sample/post/service/sample-post-async.service";
import { SamplePostSyncServiceImpl } from "src/sample/post/service/sample-post-sync.service";
import { SamplePutAsyncServiceImpl } from "src/sample/put/service/sample-put-async.service";
import { SamplePutSyncServiceImpl } from "src/sample/put/service/sample-put-sync.service";
import { HttpMethod, RequestMapper } from "src/util/request-mapper.util";

@Injectable({ scope: Scope.REQUEST })
export class ServiceFactory{
  /**
   * 
   * @param request 
   * @param samplePostSync 
   * @param samplePostASync 
   * @param samplePathASync 
   * @param samplePathSync 
   * @param samplePutASync 
   * @param samplePutSync 
   * @param sampleDeleteASync 
   * @param sampleDeleteSync 
   */
  constructor(
    @Inject(REQUEST)  private readonly request: Request,
    @Inject('SamplePostSyncServiceImpl') private readonly samplePostSync: SamplePostSyncServiceImpl,
    @Inject('SamplePostAsyncServiceImpl') private readonly samplePostASync: SamplePostAsyncServiceImpl,
    @Inject('SamplePatchAsyncServiceImpl') private readonly samplePathASync: SamplePatchAsyncServiceImpl,
    @Inject('SamplePatchSyncServiceImpl') private readonly samplePathSync: SamplePatchSyncServiceImpl,
    @Inject('SamplePutAsyncServiceImpl') private readonly samplePutASync: SamplePutAsyncServiceImpl,
    @Inject('SamplePutSyncServiceImpl') private readonly samplePutSync: SamplePutSyncServiceImpl,
    @Inject('SampleDeleteAsyncServiceImpl') private readonly sampleDeleteASync: SampleDeleteAsyncServiceImpl,
    @Inject('SampleDeleteSyncServiceImpl') private readonly sampleDeleteSync: SampleDeleteSyncServiceImpl,
    @Inject('SampleGetAsyncServiceImpl') private readonly sampleGetASync: SampleGetAsyncServiceImpl,
    @Inject('SampleGetSyncServiceImpl') private readonly sampleGetSync: SampleGetSyncServiceImpl,
  ) {}

  /**
   * 
   * @returns serviceImpl
   */
  create(): IRequestHandler {

    let mode = this.request.headers['mode'] ? this.request.headers['mode'] : RequestMapper.DEFAULT;
    
    switch (this.request.method) {

        case HttpMethod.HTTP_POST: {
            return mode === RequestMapper.ASYNC_REQUEST ? this.samplePostASync : this.samplePostSync;
        };
        case HttpMethod.HTTP_PUT: {
            return mode === RequestMapper.ASYNC_REQUEST ? this.samplePutASync : this.samplePutSync;
        };
        case HttpMethod.HTTP_PATCH: {
            return mode === RequestMapper.ASYNC_REQUEST ? this.samplePathASync : this.samplePathSync;
        };
        case HttpMethod.HTTP_DELETE: {
            return mode === RequestMapper.ASYNC_REQUEST ? this.sampleDeleteASync : this.sampleDeleteSync;
        };
        case HttpMethod.HTTP_GET: {
          return mode === RequestMapper.ASYNC_REQUEST ? this.sampleGetASync : this.sampleGetSync;
        };
    }

  }
}