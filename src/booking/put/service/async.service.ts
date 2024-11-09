import { Inject, Injectable, Logger } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { PutInterface } from "src/core/interface/put.interface";
import { KafkaTopic } from "src/util/kafka-topics.enum";
import { UtilManager } from "src/util/utility";

@Injectable()
export class BookingPutAsyncService implements PutInterface {

    private logger: Logger = new Logger(BookingPutAsyncService.name);
    constructor(@Inject('BOOKING-GATEWAY') private readonly clientKafka: ClientKafka) { }

    doPut(id: string, payload: any): Promise<Object> {
        try {
            return new Promise((resolve, reject) => {
                this.clientKafka.emit(KafkaTopic.BOOKING_UPDATING, UtilManager.toJsonStringify({
                    reference: id,
                    payload: payload
                })).subscribe((response) => {
                    if (response.errorCode == 0)
                        reject(false);
                    resolve(payload);
                    this.logger.debug('----------------------------------------------------');
                    this.logger.debug(`method      : ${payload.requestReference.method}`);
                    this.logger.debug(`mode        : ${payload.requestReference.headers.mode}`);
                    this.logger.debug(`job id      : ${payload.requestReference.job_reference}`);
                    this.logger.debug(`accepted at : ${payload.requestReference.received_at}`);
                    this.logger.debug(`callback URL: ${payload.requestReference.headers['callback-url']}`);
                    this.logger.debug('----------------------------------------------------');

                });
            })
        } catch (error) {
            this.logger.error('----------------------------------------------------');
            this.logger.error(`method      : ${payload.requestReference.method}`);
            this.logger.error(`mode        : ${payload.requestReference.headers.mode}`);
            this.logger.error(`job id      : ${payload.requestReference.job_reference}`);
            this.logger.error(`accepted at : ${payload.requestReference.received_at}`);
            this.logger.error(`callback URL: ${payload.requestReference.headers['callback-url']}`);
            this.logger.error(`error       : ${error.message ? error.message : error}`);
            this.logger.error('----------------------------------------------------');
            throw error;
        }
    }
}