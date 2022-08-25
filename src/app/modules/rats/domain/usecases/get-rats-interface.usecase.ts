import Rat from "../entities/rat.entity";

// TODO: Future implementation, to add pagination
export interface GetRatsUseCaseArgs {
    pageNumber: number;
}

export default interface IGetRatsUseCase {
    handle(): Promise<Rat[] | Error>;
}