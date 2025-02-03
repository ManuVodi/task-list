import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindOneTaskUseCase } from "./find-one-task.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('task')
export class FindOneTaskController {
    @Inject(FindOneTaskUseCase)
    private findOneTaskUseCase: FindOneTaskUseCase;

    @Get('find-one/:id_task')
    async findOneTask(@Param('id_task') id_task: number): Promise<TaskEntity>{
        return await this.findOneTaskUseCase.execute(id_task)
    }
}