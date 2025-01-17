import { IsNotEmpty, IsOptional } from "class-validator";
import { Status } from "../enums/status.enum";

export class CreateTaskDTO {
    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    createdAt: Date;

    @IsOptional()
    @IsNotEmpty()
    status?: Status;
}