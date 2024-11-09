import { PipeTransform, Injectable, ArgumentMetadata, HttpStatus, BadRequestException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class BookingPutCustomValidationPipe implements PipeTransform {
    async transform(value: any, metadata: ArgumentMetadata) {
        const { metatype } = metadata;
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const object = plainToClass(metatype, value);
        this.customPayloadValidate(object);
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

            throw new BadRequestException(properties);
        }
        return value;
    }

    private toValidate(metatype: any): boolean {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }

    private customPayloadValidate(payload: any) {
        let errors = [];
        if (payload.hasOwnProperty('id')) {
            if (payload.id.trim() == "") {
                errors.push('id must be a string');
            }
        } else {
            errors.push('id must be a string');
            errors.push('id should not be empty');
        }

        if (payload.hasOwnProperty('bookingReference')) {
            if (payload.bookingReference.trim() == "") {
                errors.push('bookingReference must be a string');
            }
        } else {
            errors.push('bookingReference must be a string');
            errors.push('bookingReference should not be empty');
        }

        if (errors.length > 0) {
            throw new BadRequestException(errors);
        }
    }
}