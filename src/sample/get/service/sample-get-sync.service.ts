import { HttpStatus, Injectable } from "@nestjs/common";
import { IRequestHandler } from "src/core/sample.interface";
import { HttpSuccessResponse } from "src/helper/sample-response.helper";
import { SampleCreateRequest } from "src/sample/dto/sample-create-request.dto";
import { SampleUpdateRequest } from "src/sample/dto/sample-update.dto";
import { ResponseMessage } from "src/util/response.message";

/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
@Injectable()
export class SampleGetSyncServiceImpl implements IRequestHandler{

    constructor() { }

    async index(param: any): Promise<HttpSuccessResponse> {
        try {

            /**The following code block should contain your implementation of the specified functionality.*/

          return await Promise.resolve(new HttpSuccessResponse(ResponseMessage.SUCCESS, HttpStatus.ACCEPTED,[]));

      } catch (error) {
          throw new Error(error);
      }
    }

    async create(payload: SampleCreateRequest): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }


    async update(payload: SampleUpdateRequest, id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }

    async delete(id: number): Promise<HttpSuccessResponse> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     */
    async get(id: number): Promise<HttpSuccessResponse> {
        try {

            /**The following code block should contain your implementation of the specified functionality.*/

          return await Promise.resolve(new HttpSuccessResponse(ResponseMessage.SUCCESS, HttpStatus.ACCEPTED,{}));

      } catch (error) {
          throw new Error(error);
      }
    }


}