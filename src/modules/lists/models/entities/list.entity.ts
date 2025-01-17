import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "lists"})
export class ListEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varying character"})
    name: string;

    @Column({type: "timestamptz"})
    createdAt: Date;

    constructor(list?: Partial<ListEntity>){
        Object.assign(this, list);
    }
}