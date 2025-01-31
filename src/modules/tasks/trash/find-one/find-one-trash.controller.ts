import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindOneTrashUseCase } from "./find-one-trash.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('trash')
export class FindOneTrashController {
    @Inject(FindOneTrashUseCase)
    private findOneTrashUseCase: FindOneTrashUseCase;

    @Get('find-one/:id_task')
    async findOneTrash(@Param('id_task') id_task: number): Promise<TaskEntity>{
        return await this.findOneTrashUseCase.execute(id_task)
    }
}