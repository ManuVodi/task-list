import { IsNumber, IsOptional } from "class-validator";

export class FindOneTaskDTO  {
    @IsOptional()
    @IsNumber()
    id?: number
}