import { BadRequestException, Inject, Injectable, InternalServerErrorException } from "@nestjs/common";
import { IListRepository } from "../../models/interfaces/list-repository.interface";
import { ListEntity } from "../../models/entities/list.entity";

@Injectable()
export class FindAllListsUseCase {
    @Inject('IListRepository')
    private listRepository: IListRepository;

    async execute(): Promise<ListEntity[]> {
        try{
            const foundLists = await this.listRepository.find_all()
            if(!foundLists) throw new BadRequestException("Não foi possível buscar todas as listas")
            return foundLists;
        }
        catch(error){
            console.log(error)
            throw new InternalServerErrorException("Falha ao buscar todas as listas")
        }
    }
}