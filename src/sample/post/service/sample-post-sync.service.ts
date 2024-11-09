import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { IRequestHandler } from 'src/core/sample.interface';
import { HttpSuccessResponse } from 'src/helper/sample-response.helper';
import { SampleCreateRequest } from 'src/sample/dto/sample-create-request.dto';
import { SampleUpdateRequest } from 'src/sample/dto/sample-update.dto';
import { ResponseMessage } from 'src/util/response.message';
/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Injectable()
export class SamplePostSyncServiceImpl implements IRequestHandler {

   
    constructor() { }
    index(param: any): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     */
    create(payload: SampleCreateRequest): Promise<HttpSuccessResponse> {
        
        try {

            /**The following code block should contain your implementation of the specified functionality.*/

            return Promise.resolve(new HttpSuccessResponse(ResponseMessage.SUCCESS, HttpStatus.CREATED, payload));
        } catch (error) {
            throw new Error(error);
        }

    }
    update(payload: SampleUpdateRequest, id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }
    get(id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }


}
