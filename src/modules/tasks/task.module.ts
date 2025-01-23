import { Module } from '@nestjs/common';
import { CreateTaskController } from './use-cases/create/create-task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './models/entities/task.entity';
import { CreateTaskUseCase } from './use-cases/create/create-task.use-case';
import { TaskTypeOrmRepository } from './repositories/task.repository';
import { FindTaskController } from './use-cases/find/find-task.controller';
import { FindTaskUseCase } from './use-cases/find/find-task.use-case';
import { DB_DATABASE } from 'src/shared/config/type-orm.config';


@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity], DB_DATABASE)
  ],
  controllers: [
    CreateTaskController,
    FindTaskController
  ],
  providers: [
    CreateTaskUseCase,
    FindTaskUseCase,
    TaskTypeOrmRepository,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository
    }
  ],
  exports: [],
})
export class TaskModule {}
