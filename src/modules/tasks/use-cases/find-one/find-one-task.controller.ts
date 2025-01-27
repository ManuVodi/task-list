import { Controller, Get, Inject } from "@nestjs/common";
import { FindOneTaskUseCase } from "./find-one-task.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('task')
export class FindOneTaskController {
    @Inject(FindOneTaskUseCase)
    private readonly findOneTaskUseCase: FindOneTaskUseCase;

    @Get('find-one')
    async findOneTask(id_task: number): Promise<TaskEntity[]>{
        return await this.findOneTaskUseCase.execute(id_task)
    }
}