import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './shared/config/type-orm.config';
import { ListModule } from './modules/lists/list.module';
import { TaskModule } from './modules/tasks/task.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), 
    ListModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
