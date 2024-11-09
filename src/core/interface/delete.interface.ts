import { BookingDto } from "src/booking/dto/booking-post.dto";

export interface DeleteInterface {
    doDelete(id: string, payload: BookingDto): Promise<Object>;
}