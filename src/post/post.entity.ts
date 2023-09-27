import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class Post{
    @ObjectIdColumn()
    _id: string

    @PrimaryColumn()
    id: string

    @Column()
    content: string

    @Column()
    url_image: string

    @Column()
    user: string
}