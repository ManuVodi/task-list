import { Inject, Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";
import { TaskEntity } from "../../models/entities/task.entity";

@Injectable()
export class FindOneTaskInTrashUseCase {
    @Inject('ITaskRepository')
    private taskRepository: ITaskRepository;

    async execute(id_task: number): Promise<TaskEntity>{
        try{
            if (isNaN(id_task)) throw new NotAcceptableException({message: 'Parametro id da task tem que ser um numero'})
    
            const findTask = await this.taskRepository.find_one_in_trash(id_task)
            
            if (!findTask) throw new NotFoundException({message: 'Task não encontrada'})

            return findTask;
        }
        catch(error){
                if (error instanceof NotFoundException) throw new NotFoundException(error.message)

                if (error instanceof NotAcceptableException) throw new NotAcceptableException(error.message)
                    
                throw new InternalServerErrorException({message: "Falha ao buscar todas as tarefas excluídas"})
        }
    }
}