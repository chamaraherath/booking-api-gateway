import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { BadRequestException } from 'src/exception/bad-request.exception';

@Injectable()
export class BookingPostCustomValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToClass(metatype, value);
        const errors = await validate(object);
        if (errors.length > 0) {
            let properties = [];
            errors.forEach((v) => {
                let messages = [];
                for (const key in v.constraints) {
                    value = v.constraints[key];
                    messages.push(value)
                }
                let obj = {};
                obj[v.property] = messages;
                properties.push(obj);
            });

            throw new BadRequestException(properties, HttpStatus.NOT_ACCEPTABLE, HttpStatus.NOT_ACCEPTABLE);
        }
        return value;
    }

    private toValidate(metatype: any): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}