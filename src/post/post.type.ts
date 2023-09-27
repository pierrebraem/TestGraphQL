import { Field, ObjectType, ID } from "@nestjs/graphql";
import { UserType } from "src/user/user.type";

@ObjectType('Post')
export class PostType{
    @Field(type => ID)
    id: string

    @Field()
    content: string

    @Field({ nullable: true })
    url_image: string

    @Field(type => UserType)
    user: string
}