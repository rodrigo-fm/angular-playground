import { Injectable } from "@angular/core";
import IRatsRepository from "../../../data/repositories/rats-interface.repository";
import Rat from "../../entities/rat.entity";

@Injectable()
export default class GetRatsUseCase {

    constructor(private readonly repository: IRatsRepository) {}

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