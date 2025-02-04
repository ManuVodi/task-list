import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateListUseCase } from "./create-list.use-case";
import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { InsertResult } from "typeorm";

@Controller('list')
export class CreateListController {
    @Inject(CreateListUseCase)
    private createListUseCase: CreateListUseCase;

    @Post('create')
    async createList(@Body() list: CreateListDTO): Promise<InsertResult>{
        return await this.createListUseCase.execute(list)
    }
}