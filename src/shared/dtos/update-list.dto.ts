import { IsOptional, IsString } from "class-validator";

export class UpdateListDTO {
    @IsOptional()
    @IsString()
    name?: string;

}