import { IsNotEmpty, IsOptional } from "class-validator";
import { Status } from "../enums/status.enum";

export class CreateTaskDTO {
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsNotEmpty()
    status?: Status;
}