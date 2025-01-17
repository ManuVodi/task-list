import { TaskEntity } from "src/modules/tasks/models/entities/task.entity";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { DeleteResult, InsertResult } from "typeorm";

export interface ITaskRepository {
    create(task: CreateTaskDTO): Promise<InsertResult>;
    update(id: number, task: UpdateTaskDTO): Promise<InsertResult>;
    find_all(id: number): Promise<TaskEntity[]>;
    delete(id: number): Promise<DeleteResult>;
}