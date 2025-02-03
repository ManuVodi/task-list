import { Controller, Inject, Param, Patch } from "@nestjs/common";
import { RestoreTaskInTrashUseCase } from "./restore-trash.use-case";

@Controller('trash')
export class RestoreTaskInTrashController {
    @Inject(RestoreTaskInTrashUseCase)
    private restoreTaskInTrashUseCase: RestoreTaskInTrashUseCase;
    
    @Patch('restore/:id_task')
    async restoreTaskInTrash(@Param('id_task') id_task: number): Promise<void>{
        await this.restoreTaskInTrashUseCase.execute(id_task)
    }
}