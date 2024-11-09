import { HttpSuccessResponse } from "src/helper/sample-response.helper";


/*
 *   Copyright (c) 2023 Chamindu Dilshan
 *   All rights reserved.
 *   opusxenta
 */
export interface IRequestHandler{
    /**
     * 
     * @param payload 
     * @returm Promise<HttpSuccessResponse>
     * This method is intended for creating a new sample entity
     */
    create(payload:any): Promise<HttpSuccessResponse>;
    /**
     * 
     * @param id 
     * @param payload 
     * @return Promise<HttpSuccessResponse>
     * This method is intended for update a new sample entity
     */
    update(payload:any,id:number): Promise<HttpSuccessResponse>;
    /**
     * 
     * @param id 
     * @return Promise<HttpSuccessResponse>
     * TThis method is intended for get or delete a new sample entity
     */
    delete(id:number): Promise<HttpSuccessResponse>;
    /**
     * 
     * @param id 
     * @return Promise<HttpSuccessResponse>
     * TThis method is intended for get sample entity by id
     */
    get(id:number): Promise<HttpSuccessResponse>;


    /**
     * 
     * @param id 
     * @return Promise<HttpSuccessResponse>
     * TThis method is intended for get sample entity by id
     */
    index(param:any): Promise<HttpSuccessResponse>;
}