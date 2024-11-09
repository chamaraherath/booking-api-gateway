import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { PostInterface } from "src/core/interface/post.interface";
import { BookingPostAsyncService } from "src/booking/post/service/async.service";
import { BookingPostSyncService } from "src/booking/post/service/sync.service";
import { HttpMethod, RequestMapper } from "src/util/request-mapper.util";
import { UtilManager } from "src/util/utility";
import { PutInterface } from "src/core/interface/put.interface";
import { BookingPutSyncService } from "src/booking/put/service/sync.service";
import { BookingPutAsyncService } from "src/booking/put/service/async.service";
import { BookingDeleteSyncService } from "src/booking/delete/service/sync.service";
import { BookingDeleteAsyncService } from "src/booking/delete/service/async.service";
import { DeleteInterface } from "src/core/interface/delete.interface";

@Injectable({ scope: Scope.REQUEST })
export class ServiceFactory {

    /**
     * 
     * @param request
     * @param bookingPostSync 
     * @param bookingPostAsync
     * @param bookingPutSync
     * @param bookingPutAsync
     * @param bookingDeleteSync
     * @param bookingDeleteAsync
     */
    constructor(
        @Inject(REQUEST) private readonly request: Request,
        @Inject('BookingPostSyncService') private readonly bookingPostSync: BookingPostSyncService,
        @Inject('BookingPostAsyncService') private readonly bookingPostAsync: BookingPostAsyncService,
        @Inject('BookingPutSyncService') private readonly bookingPutSync: BookingPutSyncService,
        @Inject('BookingPutAsyncService') private readonly bookingPutAsync: BookingPutAsyncService,
        @Inject('BookingDeleteSyncService') private readonly bookingDeleteSync: BookingDeleteSyncService,
        @Inject('BookingDeleteAsyncService') private readonly bookingDeleteAsync: BookingDeleteAsyncService
    ) { }

    /**
     * 
     * @returns PostInterface
     */
    post(): PostInterface {
        switch (this.request.method) {
            case HttpMethod.HTTP_POST: {
                return UtilManager.getRequestMode(this.request) === RequestMapper.ASYNC_REQUEST ? this.bookingPostAsync : this.bookingPostSync;
            };
        }
    }

    /**
     * 
     * @returns PutInterface
     */
    put(): PutInterface {
        switch (this.request.method) {
            case HttpMethod.HTTP_PUT: {
                return UtilManager.getRequestMode(this.request) === RequestMapper.ASYNC_REQUEST ? this.bookingPutAsync : this.bookingPutSync;
            };
        }
    }

    /**
     * 
     * @returns DeleteInterface
     */
    delete(): DeleteInterface {
        switch (this.request.method) {
            case HttpMethod.HTTP_DELETE: {
                return UtilManager.getRequestMode(this.request) === RequestMapper.ASYNC_REQUEST ? this.bookingDeleteAsync : this.bookingDeleteSync;
            };
        }
    }
}