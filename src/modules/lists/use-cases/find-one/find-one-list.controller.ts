import { Controller, Get, Inject, Param } from "@nestjs/common";
import { FindOneListUseCase } from "./find-one-list.use-case";
import { ListEntity } from "../../models/entities/list.entity";

@Controller('list')
export class FindOneListController {
    @Inject(FindOneListUseCase)
    private findOneListUseCase: FindOneListUseCase;

    @Get('find-one/:id_list')
    async execute(@Param('id_list') id_list: number): Promise<ListEntity> {
        return await this.findOneListUseCase.execute(id_list)
    }
}