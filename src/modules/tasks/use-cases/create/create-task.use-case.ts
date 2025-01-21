import { BadRequestException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";
import { InsertResult } from "typeorm";

@Injectable()
export class CreateTaskUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository

    async execute(task: CreateTaskDTO): Promise<InsertResult> {
        try {
            const createTask = await this.taskRepository.create(task)

            if(!createTask) throw new BadRequestException("Não foi possível criar a tarefa")

            return createTask;
        }
        catch (error){
            throw new InternalServerErrorException("Falha ao criar tarefa")
        }
    }
}