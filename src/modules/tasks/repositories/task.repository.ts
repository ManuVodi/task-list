import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../models/interfaces/task-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../models/entities/task.entity";
import { InsertResult, Repository, UpdateResult } from "typeorm";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";
import { DB_DATABASE } from "src/shared/config/type-orm.config";

@Injectable()
export class TaskTypeOrmRepository implements ITaskRepository {
    constructor(
        @InjectRepository(TaskEntity, DB_DATABASE)
        private taskRepository: Repository<TaskEntity>
    ){}
    
    async create(task: CreateTaskDTO): Promise<InsertResult> {
        return await this.taskRepository
        .createQueryBuilder()
        .insert()
        .into("tasks")
        .values({
            description: task.description,
            status: task.status
        })
        .execute();
    }

    async update(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult> {
        return await this.taskRepository
        .createQueryBuilder()
        .update()
        .set({
            description: task.description,
            status: task.status,
            id_lists: task.id_list
        })
        .where("id = :id_task", {id_task})
        .execute();
    }

    async find_one(id_task: number): Promise<TaskEntity> {
        const tasks =  await this.taskRepository
        .createQueryBuilder("tasks")
        .select()
        .where("id = :id_task", {id_task})
        .getOne()
        return tasks;
    }

    async find_all(): Promise<TaskEntity[]> {
        const tasks = await this.taskRepository
        .createQueryBuilder("tasks")
        .select()
        .getMany()
        return tasks;
    }

    async delete(id_task: number): Promise<void> {
        await this.taskRepository
        .createQueryBuilder("tasks")
        .softDelete()
        .where("id = :id_task", {id_task})
        .execute()
    }

    async find_all_in_trash(): Promise<TaskEntity[]>{
        const findAllInTrash = await this.taskRepository
        .createQueryBuilder("tasks")
        .select()
        .where("tasks.deletedAt IS NOT NULL")
        .withDeleted()
        .getMany()
        return findAllInTrash;
    }

    async find_one_in_trash(id_task: number): Promise<TaskEntity>{
        const findOneInTrash = await this.taskRepository
        .createQueryBuilder("tasks")
        .select()
        .where("id = :id_task", {id_task})
        .andWhere("tasks.deletedAt IS NOT NULL")
        .withDeleted()
        .getOne()
        return findOneInTrash;
    }

    async restore(id_task: number): Promise<void>{
        await this.taskRepository
        .createQueryBuilder("tasks")
        .where("deletedAt IS NOT NULL")
        .andWhere("id = :id_task", {id_task})
        .restore()
        .execute()
    }
}