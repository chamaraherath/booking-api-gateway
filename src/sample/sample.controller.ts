import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Put, UseGuards } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { AuthGuard } from "src/security/auth.gurd";
import { SampleCreateRequest } from "./dto/sample-create-request.dto";
import { IRequestHandler } from "./core/service.interface";
import { HttpSuccessResponse } from "../helper/sample-response.helper";

@Controller('sample')
export class SampleController {

    constructor(
        @Inject('IRequestHandler') private readonly service: IRequestHandler,
        @Inject('API-GATEWAY') private readonly authClient: ClientKafka) { }
    /**
     * 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for creating a new sample entity
     */
    @Post()
    @UseGuards(AuthGuard)
    async post(@Body() payload: SampleCreateRequest): Promise<HttpSuccessResponse> {
        return this.service.create(payload);
    }

    /**
     * 
     * @param id 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for update a new sample entity
     */
    @Put('/:id')
    @UseGuards(AuthGuard)
    put(@Param('id') id: number, @Body() payload: any): Promise<HttpSuccessResponse> {
        return this.service.update(payload, id);
    }

    /**
     * 
     * @param id 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for update a new sample entity
     */
    @Patch('/:id')
    @UseGuards(AuthGuard)
    patch(@Param('id') id: number, @Body() payload: any): Promise<HttpSuccessResponse> {
        return this.service.update(payload, id);
    }

    /**
     * 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for delete a new sample entity
     */
    @Delete('/:id')
    @UseGuards(AuthGuard)
    delete(@Param('id') id: number): Promise<HttpSuccessResponse> {
        return this.service.delete(id);
    }

    /**
     * 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for get a sample entity
     */
    @Get('/:id')
    @UseGuards(AuthGuard)
    get(@Param('id') id: number): Promise<HttpSuccessResponse> {
        return this.service.get(id);
    }

     /**
     * 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     * This method is intended for get a sample entity
     */
     @Get('/:id')
     @UseGuards(AuthGuard)
     index(@Body() payload: any): Promise<HttpSuccessResponse> {
         return this.service.index(payload);
     }
}