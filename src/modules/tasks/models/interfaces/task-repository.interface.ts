import { TaskEntity } from "src/modules/tasks/models/entities/task.entity";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { InsertResult, UpdateResult } from "typeorm";

export interface ITaskRepository {
    create(task: CreateTaskDTO): Promise<InsertResult>;
    update(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult>;
    find_one(id_task: number): Promise<TaskEntity>;
    find_all(): Promise<TaskEntity[]>;
    delete(id_task: number): Promise<void>;
    find_all_in_trash(): Promise<TaskEntity[]>;
    find_one_in_trash(id_task: number): Promise<TaskEntity>;
    restore(id_task: number): Promise<void>;
}