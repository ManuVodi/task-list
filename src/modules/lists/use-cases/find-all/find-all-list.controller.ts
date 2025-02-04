import { Controller, Get, Inject } from "@nestjs/common";
import { FindAllListsUseCase } from "./find-all-list.use-case";
import { ListEntity } from "../../models/entities/list.entity";

@Controller('list')
export class FindAllListsController {
    @Inject(FindAllListsUseCase)
    private findAllListsUseCase: FindAllListsUseCase;

    @Get('find-all')
    async findAll(): Promise<ListEntity[]> {
        return await this.findAllListsUseCase.execute()
    }
}