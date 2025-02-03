import { Controller, Get, Inject } from "@nestjs/common";
import { FindAllTasksUseCase } from "./find-all-task.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('task')
export class FindAllTasksController {
    @Inject(FindAllTasksUseCase)
    private findAllTasksUseCase: FindAllTasksUseCase;

    @Get('find-all')
    async findAllTask(): Promise<TaskEntity[]> {
        return await this.findAllTasksUseCase.execute()
    }
}