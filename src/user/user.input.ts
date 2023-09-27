import { InputType, Field } from '@nestjs/graphql'
import { MinLength, IsInt, IsEmail, IsNotEmpty } from 'class-validator'

@InputType()
export class CreateUserInput{
    @IsNotEmpty()
    @Field()
    firstname: string

    @IsNotEmpty()
    @Field()
    lastname: string

    @IsNotEmpty()
    @IsEmail()
    @Field()
    email: string

    @IsNotEmpty()
    @Field()
    username: string

    @IsInt()
    @Field()
    age: number

    @MinLength(4)
    @Field()
    password: string
}