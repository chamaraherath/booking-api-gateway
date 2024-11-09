import { Module } from '@nestjs/common';
import { BookingPutAsyncService } from './service/async.service';
import { BookingPutSyncService } from './service/sync.service';
import { BookingKafkaModule } from 'src/module/kafka.module';

@Module({
    imports: [BookingKafkaModule],
    providers: [
        {
            provide: 'BookingPutAsyncService',
            useClass: BookingPutAsyncService
        },
        {
            provide: 'BookingPutSyncService',
            useClass: BookingPutSyncService
        },
    ],
    exports:[
        {
            provide: 'BookingPutAsyncService',
            useClass: BookingPutAsyncService
        },
        {
            provide: 'BookingPutSyncService',
            useClass: BookingPutSyncService
        },
    ]
})
export class PutModule { }
