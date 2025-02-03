import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateTaskUseCase } from "./create-task.use-case";
import { CreateTaskDTO } from "src/shared/dtos/create-task.dto";

@Controller('task')
export class CreateTaskController {
    @Inject(CreateTaskUseCase)
    private createTaskUseCase: CreateTaskUseCase;

    @Post('create')
    async createTask(@Body() task: CreateTaskDTO): Promise<void> {
        await this.createTaskUseCase.execute(task)
    }
}