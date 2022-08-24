import IHttpClient, { HttpResponse } from "../http-client-interface";

export default class HttpAngularClient implements IHttpClient {
    async get(url: string): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}