import { v4 as uuidv4 } from 'uuid';
import { RequestMapper } from './request-mapper.util';

export class UtilManager {

    private static MY_NAMESPACE = 'booking-gw';
    private static MY_IDENTIFIER = 'opusxenta';

    constructor(public json: JSON) { }

    /**
     * 
     * @returns random stirng uuid
     */
    static getRandomString(): string {
        try {
            return uuidv4();
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param json 
     * @returns sting
     */
    static toJsonStringify(json: any): string {
        try {
            return JSON.stringify(json);
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @param json 
     * @returns JSON
     */
    static toJson(json: string): JSON {
        try {
            return JSON.parse(json);
        } catch (error) {
            throw new Error(error);
        }
    }

    /**
     * 
     * @returns datetime - tring yyyy-mm-dd hh:mm:ss
     */

    static getCurrentTime() {
        try {
            const now = new Date();
            const year = now.getFullYear();
            const amOrPm = (now.getHours() < 12) ? "AM" : "PM";
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds} ${amOrPm} UTC`;
            return new Date(formattedTime).toUTCString();
        } catch (error) {
            throw new Error(error);
        }
    }

    static unset(key: string, object: any) {
        delete object[key];
        return object;
    }

    static getRequestMode(request) {
        return request.headers['mode'] ? request.headers['mode'] : RequestMapper.DEFAULT;
    }
}