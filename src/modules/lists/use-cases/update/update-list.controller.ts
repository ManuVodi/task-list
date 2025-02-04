import { Controller, Inject, Param, Patch } from "@nestjs/common";
import { UpdateListUseCase } from "./update-list.use-case";
import { UpdateListDTO } from "src/shared/dtos/update-list.dto";

@Controller('list')
export class UpdateListController {
    @Inject(UpdateListUseCase)
    private updateListUseCase: UpdateListUseCase;

    @Patch('update/:id_list')
    async updateList(@Param('id_list') id_list: number, list: UpdateListDTO): Promise<void>{
        await this.updateListUseCase.execute(id_list, list)
    }
}