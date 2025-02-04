import { HttpException, Inject, Injectable } from "@nestjs/common";
import { IListRepository } from "../../models/interfaces/list-repository.interface";
import { FindOneListUseCase } from "../find-one/find-one-list.use-case";
import { UpdateListDTO } from "src/shared/dtos/update-list.dto";

@Injectable()
export class UpdateListUseCase {
    @Inject('IListRepository')
    private listRepository: IListRepository;
    @Inject(FindOneListUseCase)
    private findOneListUseCase: FindOneListUseCase;

    async execute(id_list: number, list: UpdateListDTO): Promise<void>{
        try{
            await this.findOneListUseCase.execute(id_list)
            await this.listRepository.update(id_list, list)
        }
        catch(error){
            throw new HttpException(error.message ?? 'Falha ao atualizar lista', error.status ?? 500)
        }
    }
}