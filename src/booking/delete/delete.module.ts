import { Module } from '@nestjs/common';
import { BookingDeleteAsyncService } from './service/async.service';
import { BookingDeleteSyncService } from './service/sync.service';
import { BookingKafkaModule } from 'src/module/kafka.module';

@Module({
    imports: [BookingKafkaModule],
    providers: [
        {
            provide: 'BookingDeleteAsyncService',
            useClass: BookingDeleteAsyncService
        },
        {
            provide: 'BookingDeleteSyncService',
            useClass: BookingDeleteSyncService
        }
    ],
    exports: [
        {
            provide: 'BookingDeleteAsyncService',
            useClass: BookingDeleteAsyncService
        },
        {
            provide: 'BookingDeleteSyncService',
            useClass: BookingDeleteSyncService
        }
    ]
})
export class DeleteModule { }
