import { Controller, Get, Inject } from "@nestjs/common";
import { FindAllTasksInTrashUseCase } from "./find-all-trash.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('trash')
export class FindAllTasksInTrashController {
    @Inject(FindAllTasksInTrashUseCase)
    private findAllTasksInTrashUseCase: FindAllTasksInTrashUseCase;

    @Get('find-all')
    async findAllTrash(): Promise<TaskEntity[]>{
        return await this.findAllTasksInTrashUseCase.execute()
    }
}