import { BadRequestException, Inject, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";

@Injectable()
export class FindTaskUseCase {
        @Inject('ITaskRepository')
        private taskRepository: ITaskRepository;

        async execute(id_task: number) {
            try {
                const tasks = this.taskRepository.find_all();
                const task = this.taskRepository.find_one(id_task);
                if (!id_task)  return tasks;

                return task;
            }
            catch (error) {
                throw new BadRequestException("Falha ao listar tarefas")
            }
        }
}