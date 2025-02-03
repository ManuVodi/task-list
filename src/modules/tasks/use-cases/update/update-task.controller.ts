import { Controller, Inject } from "@nestjs/common";
import { UpdateTaskUseCase } from "./update-task.use-case";
import { UpdateTaskDTO } from "src/shared/dtos/update-task.dto";
import { UpdateResult } from "typeorm";

@Controller('task')
export class UpdateTaskController {
    @Inject(UpdateTaskUseCase)
    private updateTaskUseCase: UpdateTaskUseCase;

    async updateTask(id_task: number, task: UpdateTaskDTO): Promise<UpdateResult>{
        return await this.updateTaskUseCase.execute(id_task, task)
    }
}