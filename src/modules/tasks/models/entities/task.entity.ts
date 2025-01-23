import { DB_SCHEMA } from "src/shared/config/type-orm.config";
import { Status } from "src/shared/enums/status.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: DB_SCHEMA, name: 'tasks'})
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    descprition: string;

    @Column({type: "timestamptz"})
    createdAt: Date;

    @Column({type: "timestamptz"})
    updateAt: Date;

    @Column({default: Status.A_FAZER})
    status: Status;

    @Column({type: "timestamptz"})
    deleteAt: Date;

    @Column({type: "number", nullable: false})
    id_list: number;

    constructor(task?: Partial<TaskEntity>){
        Object.assign(this, task);
    }
}