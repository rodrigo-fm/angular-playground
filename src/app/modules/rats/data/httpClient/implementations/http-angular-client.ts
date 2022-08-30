import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import IHttpClient, { HttpResponse } from "../http-client-interface";

@Injectable()
export default class HttpAngularClient implements IHttpClient {

    constructor(
        private httpClient: HttpClient
    ) {}

    async get(url: string): Promise<HttpResponse> {
        try {
            const result = await firstValueFrom(this.httpClient.get(url));

            return {
                statusCode: 200,
                body: result
            };
        } catch(e) {
            if(e instanceof HttpErrorResponse) {
                return {
                    statusCode: e.status,
                    body: e.message
                };
            }
            return {
                statusCode: 500,
                body: {
                    message: 'Internal server error when requesting'
                }
            }
        }
    }
}