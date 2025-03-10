import { IsNotEmpty, IsOptional } from "class-validator";
import { Status } from "../enums/status.enum";

export class UpdateTaskDTO {
    @IsOptional()
    @IsNotEmpty()
    description?: string;

    @IsOptional()
    @IsNotEmpty()
    status?: Status;

    @IsOptional()
    id_list?: number;
}