import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { TaskEntity } from "../../models/entities/task.entity";

@Injectable()
export class FindAllTrashUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository;

    async execute(): Promise<TaskEntity[]> {
        try{
            return await this.taskRepository.find_all_trash() 
        }
        catch(error){
            throw new InternalServerErrorException("Falha ao buscar todas tarefas da lixeira")
        }
    }
}