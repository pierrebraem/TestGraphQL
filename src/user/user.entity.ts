import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class User{
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    age: number

    @Column()
    password: string
}