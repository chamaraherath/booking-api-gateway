import { Injectable } from "@nestjs/common";
import { PutInterface } from "src/core/interface/put.interface";

@Injectable()
export class BookingPutSyncService implements PutInterface {
    constructor() { }
    doPut(id: string, payload: any): Promise<Object> {
        throw new Error("Method not implemented.");
    }
}