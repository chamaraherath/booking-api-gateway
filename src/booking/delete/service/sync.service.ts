import { Injectable } from "@nestjs/common";
import { DeleteInterface } from "src/core/interface/delete.interface";
import { HttpSuccessResponse } from "src/helper/booking.response.helper";

@Injectable()
export class BookingDeleteSyncService implements DeleteInterface {
    constructor() { }
    doDelete(id: string): Promise<HttpSuccessResponse> {
        throw new Error("Method not implemented.");
    }
}