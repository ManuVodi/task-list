import { HttpException, Inject, Injectable } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { FindOneTaskInTrashUseCase } from "../find-one/find-one-trash.use-case";

@Injectable()
export class RestoreTaskInTrashUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository;
    @Inject(FindOneTaskInTrashUseCase)
    private findOneTaskInTrashUseCase: FindOneTaskInTrashUseCase;

    async execute(id_task: number): Promise<void>{
        try{
            await this.findOneTaskInTrashUseCase.execute(id_task)

            await this.taskRepository.restore(id_task)
        }
        catch(error){
            throw new HttpException(error.message ?? 'Falha ao restaurar tarefa', error.status ?? 500)
        }
    }
}