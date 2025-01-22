import { Body, Controller, Inject, Post } from "@nestjs/common";
import { FindTaskUseCase } from "./find-task.use-case";
import { TaskEntity } from "../../models/entities/task.entity";
import { FindTaskDTO } from "src/shared/dtos/find-task.dto";

@Controller('task')
export class FindTaskController {
    @Inject(FindTaskUseCase)
    private readonly findTaskUseCase: FindTaskUseCase;

    @Post('find')
    async findTask(@Body() id_task: number): Promise<TaskEntity[]> {
        return await this.findTaskUseCase.execute(id_task)
    }
}