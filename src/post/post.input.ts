import { InputType, Field, ID } from '@nestjs/graphql'
import { IsNotEmpty, IsUUID } from 'class-validator'

@InputType()
export class CreatePostInput{
    @IsNotEmpty()
    @Field()
    content: string

    @Field({ nullable: true })
    url_image: string

    @IsNotEmpty()
    @Field(() => ID)
    user: string
}