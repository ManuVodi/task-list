import { TaskEntity } from "src/modules/tasks/models/entities/task.entity";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { DeleteResult, InsertResult, UpdateResult } from "typeorm";

export interface ITaskRepository {
    create(task: CreateTaskDTO): Promise<InsertResult>;
    update(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult>;
    find(id_task: number): Promise<TaskEntity[]>;
    delete(id_task: number): Promise<UpdateResult>;
}