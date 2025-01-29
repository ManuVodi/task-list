import { BadRequestException, HttpException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { UpdateResult } from "typeorm";
import { FindOneTaskUseCase } from "../find-one/find-one-task.use-case";

@Injectable()
export class DeleteTaskUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository
    @Inject(FindOneTaskUseCase)
    private findOneUseCase: FindOneTaskUseCase
    

    async execute(id_task: number): Promise<void> {
        try {
            await this.findOneUseCase.execute(id_task)

            await this.taskRepository.delete(id_task)
            
        }
        catch(error){
            throw new HttpException(error.message ?? "Falha ao deletar tarefa", error.status ?? 500)
        }
    }
}