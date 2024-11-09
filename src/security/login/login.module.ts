import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoginController } from './login.controller';

@Module({
  imports:[ConfigModule.forRoot()],
  controllers: [LoginController]
})
export class LoginModule {}
