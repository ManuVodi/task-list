import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindOneTaskInTrashUseCase } from "./find-one-trash.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('trash')
export class FindOneTaskInTrashController {
    @Inject(FindOneTaskInTrashUseCase)
    private findOneTaskInTrashUseCase: FindOneTaskInTrashUseCase;

    @Get('find-one/:id_task')
    async findOneTrash(@Param('id_task') id_task: number): Promise<TaskEntity>{
        return await this.findOneTaskInTrashUseCase.execute(id_task)
    }
}