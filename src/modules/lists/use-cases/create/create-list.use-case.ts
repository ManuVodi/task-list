import { Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { IListRepository } from "../../models/interfaces/list-repository.interface";
import { CreateListDTO } from "src/shared/dtos/create-list.dto";
import { InsertResult } from "typeorm";

@Injectable()
export class CreateListUseCase {
    @Inject('IListRepository')
    private listRepository: IListRepository;

    async execute(list: CreateListDTO): Promise<InsertResult> {
        try{
            return await this.listRepository.create(list)
        }
        catch(error){
            console.log(error)
            throw new InternalServerErrorException("Falha ao criar lista")
        }
    }
}