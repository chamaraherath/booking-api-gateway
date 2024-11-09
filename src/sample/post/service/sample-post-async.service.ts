/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { KafkaTopic } from 'src/util/kafka-topics.enum';
import { ResponseMessage } from 'src/util/response.message';
import { UtilManager } from 'src/util/utility';
import { SampleCreateRequest } from 'src/sample/dto/sample-create-request.dto';
import { SampleUpdateRequest } from 'src/sample/dto/sample-update.dto';
import { IRequestHandler } from 'src/core/sample.interface';
import { HttpSuccessResponse } from 'src/helper/sample-response.helper';

@Injectable()
export class SamplePostAsyncServiceImpl implements IRequestHandler {

    /**
     * @param clientKafka 
     */
    constructor(@Inject('API-GATEWAY') private readonly clientKafka: ClientKafka) { 
        console.log(process.env.CLIENT_NAME)
    }
    index(param: any): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }

    /**
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     */
    create(payload: SampleCreateRequest): Promise<HttpSuccessResponse> {
        try {

            this.clientKafka.emit(KafkaTopic.SAMPLE_CREATED, UtilManager.toJsonStringify(payload));

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
