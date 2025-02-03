import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { UpdateResult } from "typeorm";
import { FindOneTaskUseCase } from "../find-one/find-one-task.use-case";

@Injectable()
export class UpdateTaskUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository;
    @Inject(FindOneTaskUseCase)
    private findOneTaskUseCase: FindOneTaskUseCase;

    async execute(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult>{
        try {
            await this.findOneTaskUseCase.execute(id_task)

            return await this.taskRepository.update(id_task, task)
        }
        catch(error){
            throw new HttpException(error.message ?? "Falha ao atualizar a tarefa", error.status ?? 500)
        }
    }
}