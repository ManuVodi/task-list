import { Controller, Delete, Inject, Param } from "@nestjs/common";
import { DeleteTaskUseCase } from "./delete-task.use-case";
import { UpdateResult } from "typeorm";
import { FindOneTaskUseCase } from "../find-one/find-one-task.use-case";

@Controller('task')
export class DeleteTaskController {
    @Inject(DeleteTaskUseCase)
    private deleteTaskUseCase: DeleteTaskUseCase;

    @Delete('delete/:id_task')
    async deleteTask(@Param('id_task') id_task: number): Promise<void>{
        await this.deleteTaskUseCase.execute(id_task)
    } 
}