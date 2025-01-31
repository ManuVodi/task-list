import { Controller, Get, Inject } from "@nestjs/common";
import { FindAllTrashUseCase } from "./find-all-trash.use-case";
import { TaskEntity } from "../../models/entities/task.entity";

@Controller('trash')
export class FindAllTrashController {
    @Inject(FindAllTrashUseCase)
    private findAllTrashUseCase: FindAllTrashUseCase;

    @Get('find-all')
    async findAllTrash(): Promise<TaskEntity[]>{
        return await this.findAllTrashUseCase.execute()
    }
}