import { Module } from '@nestjs/common';
import { DB_DATABASE } from 'src/shared/config/type-orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './models/entities/task.entity';
import { TaskTypeOrmRepository } from './repositories/task.repository';
import { CreateTaskController } from './use-cases/create/create-task.controller';
import { CreateTaskUseCase } from './use-cases/create/create-task.use-case';
import { FindAllTasksController } from './use-cases/find-all/find-all-task.controller';
import { FindAllTasksUseCase } from './use-cases/find-all/find-all-task.use-case';
import { FindOneTaskController } from './use-cases/find-one/find-one-task.controller';
import { FindOneTaskUseCase } from './use-cases/find-one/find-one-task.use-case';
import { DeleteTaskController } from './use-cases/delete/delete-task.controller';
import { DeleteTaskUseCase } from './use-cases/delete/delete-task.use-case';
import { FindAllTasksInTrashController } from './trash/find-all/find-all-trash.controller';
import { FindOneTaskInTrashUseCase } from './trash/find-one/find-one-trash.use-case';
import { FindOneTaskInTrashController } from './trash/find-one/find-one-trash.controller';
import { RestoreTaskInTrashUseCase } from './trash/restore/restore-trash.use-case';
import { FindAllTasksInTrashUseCase } from './trash/find-all/find-all-trash.use-case';
import { RestoreTaskInTrashController } from './trash/restore/restore-trash.controller';
import { UpdateTaskController } from './use-cases/update/update-task.controller';
import { UpdateTaskUseCase } from './use-cases/update/update-task.use-case';


@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity], DB_DATABASE)
  ],
  controllers: [
    CreateTaskController,
    FindAllTasksController,
    FindOneTaskController,
    UpdateTaskController,
    DeleteTaskController,
    FindAllTasksInTrashController,
    FindOneTaskInTrashController,
    RestoreTaskInTrashController,
  ],
  providers: [
    CreateTaskUseCase,
    FindAllTasksUseCase,
    FindOneTaskUseCase,
    UpdateTaskUseCase,
    DeleteTaskUseCase,
    FindAllTasksInTrashUseCase,
    FindOneTaskInTrashUseCase,
    RestoreTaskInTrashUseCase,
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
