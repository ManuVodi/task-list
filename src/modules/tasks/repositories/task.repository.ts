import { Injectable } from "@nestjs/common";
import { ITaskRepository } from "../models/interfaces/task-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { TaskEntity } from "../models/entities/task.entity";
import { InsertResult, Repository, Timestamp, UpdateResult } from "typeorm";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";

@Injectable()
export class TaskTypeOrmRepository implements ITaskRepository {
    constructor(
        @InjectRepository(TaskEntity)
        private taskRepository: Repository<TaskEntity>
    ){}
    
    async create(task: CreateTaskDTO): Promise<InsertResult> {
        return await this.taskRepository
        .createQueryBuilder()
        .insert()
        .into("tasks")
        .values({
            description: task.description,
            createdAt: task.createdAt,
            status: task.status
        })
        .execute();
    }

    async update(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult> {
        return await this.taskRepository
        .createQueryBuilder()
        .update()
        .set({
            descprition: task.description,
            updateAt: task.updateAt,
            status: task.status,
            id_list: task.id_list
        })
        .where("id := id_task", {id_task})
        .execute();
    }

    async find(id_task: number): Promise<TaskEntity[]> {
        const tasks =  await this.taskRepository
        .createQueryBuilder("tasks")
        .select(["*"])
        .where("id := id_task", {id_task})
        .getMany()
        return tasks;
    }

    async delete(id_task: number): Promise<UpdateResult> {
        return await this.taskRepository
        .createQueryBuilder("task")
        .update()
        .set({
            deleteAt: new Date()
        })
        .where("id := id_task", {id_task})
        .execute()
    }
}