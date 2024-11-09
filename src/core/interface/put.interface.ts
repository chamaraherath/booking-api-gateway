export interface PutInterface {
    doPut(id: string, payload: any): Promise<Object>;
}