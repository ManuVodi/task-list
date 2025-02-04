import { DB_SCHEMA } from "src/shared/config/type-orm.config";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({schema: DB_SCHEMA, name: 'lists'})
export class ListEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    constructor(list?: Partial<ListEntity>){
        Object.assign(this, list);
    }
}