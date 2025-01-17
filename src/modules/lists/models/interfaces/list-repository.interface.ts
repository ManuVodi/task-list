import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { DeleteResult, InsertResult } from "typeorm";
import { ListEntity } from "../entities/list.entity";

export interface IListRepository {
    create(list: CreateListDTO): Promise<InsertResult>;
    update(id: number): Promise<InsertResult>;
    find_all(id?: number): ListEntity[];
    delete(id: number): Promise<DeleteResult>;
}