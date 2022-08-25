import { Injectable } from "@angular/core";
import IHttpClient, { HttpResponse } from "../http-client-interface";

@Injectable()
export default class HttpAngularClient implements IHttpClient {
    async get(url: string): Promise<HttpResponse> {
        throw new Error("Method not implemented.");
    }
}