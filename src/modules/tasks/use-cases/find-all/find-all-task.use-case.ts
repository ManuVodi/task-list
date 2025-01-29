import { BadRequestException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { TaskEntity } from "../../models/entities/task.entity";

@Injectable()
export class FindAllTaskUseCase {
        constructor(
                @Inject('ITaskRepository')
                private taskRepository: ITaskRepository
        ) {}

        async execute(): Promise<TaskEntity[]> {
                try{
                        const tasks = await this.taskRepository.find_all()
                        if(!tasks) throw new BadRequestException("Não foi possível buscar as tarefas")
                        return tasks;
                }
                catch(error){
                        throw new InternalServerErrorException("Falha ao buscar todas as tarefas")
                }
        }
        
}