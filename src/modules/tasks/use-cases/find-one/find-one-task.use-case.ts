import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";

@Injectable()
export class FindOneTaskUseCase {
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository;

    async execute(id_task: number){
        try {
            const task = this.taskRepository.find_one(id_task)
            return task;
        }
        catch(error){
            throw new InternalServerErrorException('Falha ao buscar a tarefa')
        }
    }
}