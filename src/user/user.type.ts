import { Field, ObjectType, ID } from "@nestjs/graphql"

@ObjectType('User')
export class UserType{
    @Field(type => ID)
    id: string

    @Field()
    firstname: string

    @Field()
    lastname: string

    @Field()
    email: string

    @Field()
    username: string

    @Field()
    age: number

    @Field()
    password: string
}