import { Body, Controller, Get, Inject } from "@nestjs/common";
import { FindAllTaskUseCase } from "./find-all-task.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('task')
export class FindAllTaskController {
    @Inject(FindAllTaskUseCase)
    private readonly findAllTaskUseCase: FindAllTaskUseCase;

    @Get('find-all')
    async findAllTask(): Promise<TaskEntity[]> {
        return await this.findAllTaskUseCase.execute()
    }
}