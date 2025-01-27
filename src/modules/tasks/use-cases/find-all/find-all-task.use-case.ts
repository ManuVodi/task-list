import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";

@Injectable()
export class FindAllTaskUseCase {
        @Inject('ITaskRepository')
        private taskRepository: ITaskRepository;

        async execute() {
                try{
                        const tasks = this.taskRepository.find_all()
                        return tasks;
                }
                catch(error){
                        throw new InternalServerErrorException("Falha ao buscar todas as tarefas")
                }
        }
        
}