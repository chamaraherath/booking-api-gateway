import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginModule } from './security/login/login.module';
import { BookingModule } from './booking/booking.module';

@Module({
    imports: [ConfigModule.forRoot({ isGlobal: true }), BookingModule],
    controllers: [],
    providers: [],
    exports: []
})
export class AppModule { }
