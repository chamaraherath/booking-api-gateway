import { Body, Controller, Delete, HttpCode, HttpStatus, Inject, Param, Post, Put, Req, UseGuards, UsePipes } from "@nestjs/common";
import { PostInterface } from "src/core/interface/post.interface";
import { BookingDto } from "../dto/booking-post.dto";
import { AuthGuard } from "src/security/auth.gurd";
import { ErrorMessage, HttpSuccessResponse } from "src/helper/booking.response.helper";
import { ResponseMessage } from "src/util/response.message";
import { GatewayAttribute } from "../decorator/request.decorator";
import { BookingPostCustomValidationPipe } from "../validator/post.required.pipe";
import { PutInterface } from "src/core/interface/put.interface";
import { BookingPutCustomValidationPipe } from "../validator/put.required.pipe";
import { DeleteInterface } from "src/core/interface/delete.interface";

@Controller()
export class BookingController {

    /**
     * 
     * @param postService
     */
    constructor(
        @Inject('PostRequestHandler') private readonly postService: PostInterface,
        @Inject('PutRequestHandler') private readonly putService: PutInterface,
        @Inject('DeleteRequestHandler') private readonly deleteService: DeleteInterface
    ) { }

    /**
     * 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     * for booking create
     */
    @Post()
    @UseGuards(AuthGuard)
    @UsePipes(new BookingPostCustomValidationPipe())
    @HttpCode(HttpStatus.ACCEPTED)
    async post(@Body() payload: BookingDto, @GatewayAttribute() req, @Req() request: any): Promise<HttpSuccessResponse> {
        try {
            return new Promise((resolve, reject) => {
                let user = request.user;
                payload.requestReference = req;
                payload.orgId = user.orgId;
                payload.createdBy = user.userId;
                payload.updatedBy = user.userId;
                this.postService.doPost(payload).then((result) => {
                    resolve(
                        new HttpSuccessResponse(
                            ResponseMessage.ACCEPTED,
                            HttpStatus.ACCEPTED,
                            result,
                            HttpStatus.ACCEPTED.toString()
                        )
                    );
                 
                }).catch((error) => {
                    reject(error);
                    throw new Error(ErrorMessage.INTERNAL_SERVER_ERROR);
                });
            })
        } catch (error) {
            throw new Error(error);

        }
    }

    /**
     * 
     * @param id 
     * @param payload 
     * @returns Promise<HttpSuccessResponse>
     * for booking update
     */
    @Put('/:id')
    @UseGuards(AuthGuard)
    @UsePipes(new BookingPutCustomValidationPipe())
    @HttpCode(HttpStatus.ACCEPTED)
    async put(@Param('id') id: string, @Body() payload: BookingDto, @GatewayAttribute() req, @Req() request: any): Promise<HttpSuccessResponse> {
        try {
            return new Promise((resolve, reject) => {
                let user = request.user;
                payload.requestReference = req;
                payload.orgId = user.orgId;
                payload.createdBy = user.userId;
                payload.updatedBy = user.userId;
                this.putService.doPut(id, payload).then((result) => {
                    resolve(
                        new HttpSuccessResponse(
                            ResponseMessage.ACCEPTED,
                            HttpStatus.ACCEPTED,
                            result,
                            HttpStatus.ACCEPTED.toString()
                        )
                    );
                }).catch((error) => {
                    reject(error);
                    throw new Error(ErrorMessage.INTERNAL_SERVER_ERROR);
                });
            })
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param id 
     * @returns Promise<HttpSuccessResponse>
     * for booking delete
     */
    @Delete('/:id')
    @UseGuards(AuthGuard)
    async delete(@Param('id') id: string, @GatewayAttribute() req, @Req() request: any): Promise<HttpSuccessResponse> {
        try {
            return new Promise((resolve, reject) => {
                let payload = new BookingDto();
                let user = request.user;
                payload.requestReference = req;
                payload.orgId = user.orgId;
                payload.createdBy = user.userId;
                payload.updatedBy = user.userId;
                this.deleteService.doDelete(id, payload).then((result) => {
                    resolve(
                        new HttpSuccessResponse(
                            ResponseMessage.ACCEPTED,
                            HttpStatus.ACCEPTED,
                            result,
                            HttpStatus.ACCEPTED.toString()
                        )
                    );
                }).catch((error) => {
                    reject(error);
                    throw new Error(ErrorMessage.INTERNAL_SERVER_ERROR);
                });
            });
        } catch (error) {
            throw new Error(error);
        }
    }
}