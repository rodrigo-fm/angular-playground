import Rat from "../entities/rat.entity";

export default interface IGetRatsUseCase {
    handle(): Promise<Rat[] | Error>;
}