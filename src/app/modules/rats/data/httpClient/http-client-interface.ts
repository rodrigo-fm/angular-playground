export interface HttpRequest {}

export interface HttpResponse {
    statusCode: number;
    body: any;
}

export default interface IHttpClient {
    get(url: string): Promise<HttpResponse>;
}