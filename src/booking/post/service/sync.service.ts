import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";
import { PostInterface } from "src/core/interface/post.interface";
import { ErrorMessage } from "src/helper/booking.response.helper";
import { KafkaTopic } from "src/util/kafka-topics.enum";
import { UtilManager } from "src/util/utility";

@Injectable()
export class BookingPostSyncService implements PostInterface {
    
    constructor(@Inject('BOOKING-GATEWAY') private readonly clientKafka: ClientKafka) {
        this.clientKafka.subscribeToResponseOf(KafkaTopic.BOOKING_CREATED);
    }
    
    doPost(payload: any): Promise<Object> {
        try {
            return new Promise((resolve, reject) => {
                this.clientKafka.send(KafkaTopic.BOOKING_CREATED, UtilManager.toJsonStringify(payload)).subscribe((response) => {
                    if (!response || response.errorCode != 0) {
                        reject(response);
                    } else {
                        resolve(response);
                    }
                });
            })
        } catch (error) {
            // Creating a custom error message with more context
            const customErrorMessage = `Error while creating a booking: ${error.message || ErrorMessage.INTERNAL_SERVER_ERROR}`;

            // Throwing the custom error message
            throw new Error(customErrorMessage);
        }
    }
}