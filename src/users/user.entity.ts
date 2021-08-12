import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('shopping')
export class UserEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:50})
    title:string;

    @Column()
    price:number;

    @Column()
    quantity:number;

    @Column({default: false})
    completed: boolean;
}