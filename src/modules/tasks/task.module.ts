import { Module } from '@nestjs/common';
import { CreateTaskController } from './use-cases/create/create-task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from 'src/shared/config/type-orm.config';
import { TaskEntity } from './models/entities/task.entity';
import { CreateTaskUseCase } from './use-cases/create/create-task.use-case';
import { TaskTypeOrmRepository } from './repositories/task.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([TaskEntity])
  ],
  controllers: [
    CreateTaskController
  ],
  providers: [
    CreateTaskUseCase,
    TaskTypeOrmRepository,
    {
      provide: 'ITaskRepository',
      useExisting: TaskTypeOrmRepository
    }
  ],
  exports: [],
})
export class TaskModule {}
