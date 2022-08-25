import { Inject, Injectable } from "@angular/core";
import Rat from "../../../domain/entities/rat.entity";
import IHttpClient from "../../httpClient/http-client-interface";
import HttpAngularClient from "../../httpClient/implementations/http-angular-client";
import RatRedditJsonModel from "../../models/rat-reddit.model";
import IRatsRepository from "../rats-interface.repository";

@Injectable()
export default class RatsRedditRepository implements IRatsRepository {
    
    constructor(@Inject(HttpAngularClient) private readonly httpClient: IHttpClient) {}

    async getRats(): Promise<Rat[]> {
        const response = await this.httpClient.get('https://www.reddit.com/r/RATS/.json');

        if(response.statusCode === 200) {
            return RatRedditJsonModel.fromJsonList(response.body.data.children);
        }

        throw new Error("Error fetching rats from reddit's API");
    }
}