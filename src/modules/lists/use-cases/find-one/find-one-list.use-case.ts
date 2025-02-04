import { Inject, Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { IListRepository } from "../../models/interfaces/list-repository.interface";
import { ListEntity } from "../../models/entities/list.entity";

@Injectable()
export class FindOneListUseCase {
    @Inject('IListRepository')
    private listRepository: IListRepository;

    async execute(id_list: number): Promise<ListEntity> {
        try{
            if(isNaN(id_list)) throw new NotAcceptableException({message: 'O parâmetro ID da lista deve ser um número'})

            const foundList = await this.listRepository.find_one(id_list)

            if(!foundList) throw new NotFoundException({message:'Lista não encontrada'})

            return foundList;
        }
        catch(error){

        }
    }
}