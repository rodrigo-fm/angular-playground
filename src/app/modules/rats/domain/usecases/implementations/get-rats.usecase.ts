import { Inject, Injectable } from "@angular/core";
import RatsRedditRepository from "../../../data/repositories/implementations/rats-reddit.repository";
import IRatsRepository from "../../../data/repositories/rats-interface.repository";
import Rat from "../../entities/rat.entity";
import IGetRatsUseCase from "../get-rats-interface.usecase";

@Injectable()
export default class GetRatsUseCase implements IGetRatsUseCase {

    constructor(@Inject(RatsRedditRepository) private readonly repository: IRatsRepository) {}

    handle = async (): Promise<Rat[] | Error> => {
        try {
            return await this.repository.getRats();
        }
        catch(e) {
            if(e instanceof Error) {
                return new Error(e.message);
            }
            return new Error('Error getting rats');
        }
    }
}