import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { IRequestHandler } from 'src/core/sample.interface';
import { HttpSuccessResponse } from 'src/helper/sample-response.helper';
import { SampleCreateRequest } from 'src/sample/dto/sample-create-request.dto';
import { SampleUpdateRequest } from 'src/sample/dto/sample-update.dto';
import { HttpMethod, RequestMapper } from 'src/util/request-mapper.util';
import { ResponseMessage } from 'src/util/response.message';
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Injectable()
export class SamplePutSyncServiceImpl implements IRequestHandler {

    private readonly logger = new Logger(SamplePutSyncServiceImpl.name);
    private readonly info = {
        method: HttpMethod.HTTP_PUT,
        mode:RequestMapper.SYNC_REQUEST,
        class:SamplePutSyncServiceImpl.name
    };

    constructor() { }
    
    index(param: any): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }
    create(payload: SampleCreateRequest): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }
    /**
     * 
     * @param payload 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     */
    update(payload: SampleUpdateRequest, id: number): Promise<HttpSuccessResponse> {
        try {
            /**The following code block should contain your implementation of the specified functionality. */
            return Promise.resolve(new HttpSuccessResponse(ResponseMessage.SUCCESS, HttpStatus.ACCEPTED, payload));
        } catch (error) {
            throw new Error(error);
        }
    }
    delete(id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }
    get(id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }

    


}
