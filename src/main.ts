import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({ transform: true }),
    );
    //Swagger Configurations
    /**
     * Title: Should change to api resource name.
     * Description: Add understandable description about what this endpoints about.
     * Each Prod release should change this api version to next version.
     * Place TAG EX. pet, store and user
     */
    const config = new DocumentBuilder()
        .setTitle('Booking')
        .setDescription('Booking API description')
        .setVersion('1.0')
        .addTag('Booking')
        .build();
    app.setGlobalPrefix(process.env.PREFIX);
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('booking-doc', app, document);
    console.log(`port running : ${process.env.PORT}`);

    await app.listen(process.env.PORT);
}
bootstrap();
