import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListEntity } from "../models/entities/list.entity";
import { DeleteResult, InsertResult, Repository, UpdateResult } from "typeorm";
import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { UpdateListDTO } from "src/shared/dtos/update-list.dto";
import { DB_DATABASE } from "src/shared/config/type-orm.config";
import { IListRepository } from "../models/interfaces/list-repository.interface";

@Injectable()
export class ListTypeOrmRepository implements IListRepository{
    @InjectRepository(ListEntity, DB_DATABASE)
    private listRepository: Repository<ListEntity>

    async create(list: CreateListDTO): Promise<InsertResult> {
        return await this.listRepository
        .createQueryBuilder()
        .insert()
        .into("lists")
        .values({
            name: list.name
        })
        .execute();
    }

    async update(id_list: number, list: UpdateListDTO): Promise<UpdateResult> {
        return await this.listRepository
        .createQueryBuilder()
        .update()
        .set({
            name: list.name 
        })
        .where("id := id_list", {id_list})
        .execute();
    }

    async find_one(id_list: number): Promise<ListEntity> {
        const list = await this.listRepository
        .createQueryBuilder("lists")
        .select()
        .where("id := id_list", {id_list})
        .andWhere("deletedAt IS NULL")
        .getOne()
        return list;
    }

    async find_all(): Promise<ListEntity[]>{
        const lists = await this.listRepository
        .createQueryBuilder("lists")
        .select()
        .where("deletedAt IS NULL")
        .getMany()
        return lists;
    }

    async delete(id_list: number): Promise<DeleteResult> {
        return await this.listRepository
        .createQueryBuilder("lists")
        .softDelete()
        .where("id := id_list", {id_list})
        .execute()
    }
}