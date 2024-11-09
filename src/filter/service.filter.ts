// import { Inject, Injectable } from "@nestjs/common";
// import { ClientKafka } from "@nestjs/microservices";
// import { SampleDeleteAsyncServiceImpl } from "src/sample/delete/command/sample-delete-async.cmd";
// import { SampleDeleteSyncServiceImpl } from "src/sample/delete/command/sample-delete-sync.cmd";
// import { SamplePatchAsyncServiceImpl } from "src/sample/patch/command/sample-patch-async.cmd";
// import { SamplePatchSyncServiceImpl } from "src/sample/patch/command/sample-patch-sync.cmd";
// import { SamplePutAsyncServiceImpl } from "src/sample/put/command/sample-put-async.cmd";
// import { SamplePutSyncServiceImpl } from "src/sample/put/command/sample-put-sync.cmd";
// import { HttpMethod, RequestMapper } from "src/util/request-mapper.util";
// import { SamplePostAsyncServiceImpl } from "../sample/post/service/sample-post-async.service";
// import { SamplePostSyncServiceImpl } from "../sample/post/service/sample-post-sync.service";

/**
 * 
 * @param req 
 * @returns ServiceImplmentation
//  */
//  function serviceFilter(req: any) {

//     let mode = req.headers.mode ? req.headers.mode : RequestMapper.DEFAULT;
    
//     switch (req.method) {

//         case HttpMethod.HTTP_POST: {
//             return mode === RequestMapper.ASYNC_REQUEST ? new SamplePostAsyncServiceImpl() : new SamplePostSyncServiceImpl();
//         };
//         case HttpMethod.HTTP_PUT: {
//             return mode === RequestMapper.ASYNC_REQUEST ? new SamplePutAsyncServiceImpl() : new SamplePutSyncServiceImpl();
//         };
//         case HttpMethod.HTTP_PATCH: {
//             return mode === RequestMapper.ASYNC_REQUEST ? new SamplePatchAsyncServiceImpl() : new SamplePatchSyncServiceImpl();
//         };
//         case HttpMethod.HTTP_DELETE: {
//             return mode === RequestMapper.ASYNC_REQUEST ? new SampleDeleteAsyncServiceImpl() : new SampleDeleteSyncServiceImpl();
//         };
//         case HttpMethod.HTTP_GET: {

//         };
//     }
// }