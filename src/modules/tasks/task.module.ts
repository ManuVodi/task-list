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


@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity], DB_DATABASE)
  ],
  controllers: [
    CreateTaskController,
    FindAllTaskController,
    FindOneTaskController,
  ],
  providers: [
    CreateTaskUseCase,
    FindAllTaskUseCase,
    FindOneTaskUseCase,
    TaskTypeOrmRepository,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository
    }
  ],
  exports: [],
})
export class TaskModule {}
