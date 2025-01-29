import { Module } from '@nestjs/common';
import { CreateTaskController } from './use-cases/create/create-task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './models/entities/task.entity';
import { CreateTaskUseCase } from './use-cases/create/create-task.use-case';
import { TaskTypeOrmRepository } from './repositories/task.repository';
import { FindAllTaskController } from './use-cases/find-all/find-all-task.controller';
import { FindAllTaskUseCase } from './use-cases/find-all/find-all-task.use-case';
import { DB_DATABASE } from 'src/shared/config/type-orm.config';
import { FindOneTaskController } from './use-cases/find-one/find-one-task.controller';
import { FindOneTaskUseCase } from './use-cases/find-one/find-one-task.use-case';
import { DeleteTaskController } from './use-cases/delete/delete-task.controller';
import { DeleteTaskUseCase } from './use-cases/delete/delete-task.use-case';


@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity], DB_DATABASE)
  ],
  controllers: [
    CreateTaskController,
    FindAllTaskController,
    FindOneTaskController,
    DeleteTaskController,
  ],
  providers: [
    CreateTaskUseCase,
    FindAllTaskUseCase,
    FindOneTaskUseCase,
    DeleteTaskUseCase,
    TaskTypeOrmRepository,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository
    }
  ],
  exports: [
    FindOneTaskUseCase
  ],
})
export class TaskModule {}
