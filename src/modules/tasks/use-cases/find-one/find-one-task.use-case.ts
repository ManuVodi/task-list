import { BadRequestException, HttpException, Inject, Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException, UnprocessableEntityException } from "@nestjs/common";
import { ITaskRepository } from "../../models/interfaces/task-repository.interface";

@Injectable()
export class FindOneTaskUseCase {
    @Inject('ITaskRepository')
    private readonly taskRepository: ITaskRepository

    async execute(id_task: number){
        try {
            if (isNaN(id_task)) {
                throw new NotAcceptableException({message: 'Parametro id da task tem que ser um numero'})
            }
            const task = await this.taskRepository.find_one(id_task)

            if (!task) {
                throw new NotFoundException({message: 'Task não encontrada'})
            }
            
            return task;
        }
        catch(error){
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message)
            }

            if (error instanceof NotAcceptableException) {
                throw new NotAcceptableException(error.message)
            }
            
            throw new InternalServerErrorException({message: "Falha ao deletar tarefa"})
        }
    }
}