import { HttpException, Inject, Injectable } from "@nestjs/common";
import { IListRepository } from "../../models/interfaces/list-repository.interface";
import { FindOneListUseCase } from "../find-one/find-one-list.use-case";

@Injectable()
export class DeleteListUseCase {
    @Inject('IListRepository')
    private listRepository: IListRepository;
    @Inject(FindOneListUseCase)
    private findOneListUseCase: FindOneListUseCase;

    async execute(id_list: number): Promise<void> {
        try{
            await this.findOneListUseCase.execute(id_list)
            await this.listRepository.delete(id_list)
        }
        catch(error){
            throw new HttpException(error.message ?? 'Falha ao deletar lista', error.status ?? 500)
        }
    }

}