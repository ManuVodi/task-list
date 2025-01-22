import { IsOptional } from "class-validator";

export class FindTaskDTO  {
    @IsOptional()
    id?: number
}