export interface IRequestHandler {
    /**
     * 
     * @param payload 
     * @returm Promise<HttpSuccessResponse>
     * This method is intended for creating a new booking entity
     */
    create(payload: any): Promise<boolean>;

}