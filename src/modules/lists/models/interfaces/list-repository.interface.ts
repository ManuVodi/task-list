import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";
import { ListEntity } from "../entities/list.entity";
import { UpdateListDTO } from "src/shared/dtos/update-list.dto";

export interface IListRepository {
    create(list: CreateListDTO): Promise<InsertResult>;
    update(id_list: number, list: UpdateListDTO): Promise<UpdateResult>;
    find(id_list?: number): ListEntity[];
    delete(id_list: number): Promise<DeleteResult>;
}