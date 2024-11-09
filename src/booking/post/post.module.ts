import { Module } from '@nestjs/common';
import { BookingKafkaModule } from '../../module/kafka.module';
import { BookingPostAsyncService } from './service/async.service';
import { BookingPostSyncService } from './service/sync.service';

@Module({
    imports: [
        BookingKafkaModule
    ],
    providers: [
        {
            provide: 'BookingPostAsyncService',
            useClass: BookingPostAsyncService
        },
        {
            provide: 'BookingPostSyncService',
            useClass: BookingPostSyncService
        },
    ],
    exports: [
        {
            provide: 'BookingPostAsyncService',
            useClass: BookingPostAsyncService
        },
        {
            provide: 'BookingPostSyncService',
            useClass: BookingPostSyncService
        },
    ],

})
export class PostModule { }
