import { Controller, Delete, Inject, Param } from "@nestjs/common";
import { DeleteListUseCase } from "./delete-list.use-case";

@Controller('list')
export class DeleteListController {
    @Inject(DeleteListUseCase)
    private deleteListUseCase: DeleteListUseCase;

    @Delete('delete/:id_list')
    async deleteList(@Param('id_list') id_list: number): Promise<void> {
        await this.deleteListUseCase.execute(id_list)
    }
}