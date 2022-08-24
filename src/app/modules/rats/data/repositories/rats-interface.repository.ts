import Rat from "../../domain/entities/rat.entity";

export default interface IRatsRepository {
    getRats(): Promise<Rat[]>
}