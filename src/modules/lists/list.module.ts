import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE } from 'src/shared/config/type-orm.config';
import { ListEntity } from './models/entities/list.entity';
import { CreateListController } from './use-cases/create/create-list.controller';
import { UpdateListController } from './use-cases/update/update-list.controller';
import { FindOneListController } from './use-cases/find-one/find-one-list.controller';
import { FindAllListsController } from './use-cases/find-all/find-all-list.controller';
import { DeleteListController } from './use-cases/delete/delete-list.controller';
import { CreateListUseCase } from './use-cases/create/create-list.use-case';
import { UpdateListUseCase } from './use-cases/update/update-list.use-case';
import { FindOneListUseCase } from './use-cases/find-one/find-one-list.use-case';
import { FindAllListsUseCase } from './use-cases/find-all/find-all-list.use-case';
import { DeleteListUseCase } from './use-cases/delete/delete-list.use-case';
import { ListTypeOrmRepository } from './repositories/list.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListEntity], DB_DATABASE)
  ],
  controllers: [
    CreateListController,
    UpdateListController,
    FindOneListController,
    FindAllListsController,
    DeleteListController
  ],
  providers: [
    CreateListUseCase,
    UpdateListUseCase,
    FindOneListUseCase,
    FindAllListsUseCase,
    DeleteListUseCase,
    ListTypeOrmRepository,
    {
      provide: 'IListRepository',
      useExisting: ListTypeOrmRepository
    }
  ],
  exports: [
    FindOneListUseCase
  ],
})
export class ListModule {}
