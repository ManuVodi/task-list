import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ListEntity } from "../models/entities/list.entity";
import { DeleteResult, InsertResult, Repository, UpdateResult } from "typeorm";
import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { UpdateListDTO } from "src/shared/dtos/update-list.dto";

@Injectable()
export class ListTypeOrmRepository {
    constructor(
        @InjectRepository(ListEntity)
        private listRepository: Repository<ListEntity>
    ) {}

    async create(list: CreateListDTO): Promise<InsertResult> {
        return await this.listRepository
            .createQueryBuilder()
            .insert()
            .into("lists")
            .values({
                name: list.name,
                createdAt: list.createdAt
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

    async find(id_list: number): Promise<ListEntity[]> {
        const lists = await this.listRepository
        .createQueryBuilder()
        .select(["*"])
        .where("id := id_list", {id_list})
        .execute()

        return lists;
    }

    async delete(id_list: number): Promise<DeleteResult> {
        return await this.listRepository
        .createQueryBuilder()
        .delete()
        .where("id := id_list", {id_list})
        .execute()
    }
}