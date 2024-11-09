import { Module } from '@nestjs/common';
import { BookingController } from './controller/booking.controller';
import { BookingKafkaModule } from 'src/module/kafka.module';
import { PostModule } from './post/post.module';
import { ServiceFactory } from 'src/factory/booking.factory';
import { PutModule } from './put/put.module';
import { DeleteModule } from './delete/delete.module';

@Module({
    controllers: [BookingController],
    imports: [BookingKafkaModule, PostModule, PutModule, DeleteModule],
    providers: [
        ServiceFactory,
        {
            provide: 'PostRequestHandler',
            useFactory: (factory: ServiceFactory) => factory.post(),
            inject: [ServiceFactory],
        },
        {
            provide: 'PutRequestHandler',
            useFactory: (factory: ServiceFactory) => factory.put(),
            inject: [ServiceFactory],
        },
        {
            provide: 'DeleteRequestHandler',
            useFactory: (factory: ServiceFactory) => factory.delete(),
            inject: [ServiceFactory],
        }
    ],
    exports: [
        BookingKafkaModule
    ]
})
export class BookingModule { }
