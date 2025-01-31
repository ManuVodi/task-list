import { DB_SCHEMA } from "src/shared/config/type-orm.config";
import { Status } from "src/shared/enums/status.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({schema: DB_SCHEMA, name: 'tasks'})
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @Column({default: Status.A_FAZER})
    status: Status;

    @DeleteDateColumn()
    deletedAt: Date;

    @Column({type: "int", nullable: false})
    id_lists: number;

    constructor(task?: Partial<TaskEntity>){
        Object.assign(this, task);
    }
}