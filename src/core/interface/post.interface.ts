export interface PostInterface {
    doPost(payload: any): Promise<Object>;
}