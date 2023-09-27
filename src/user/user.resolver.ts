import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";
import { CreateUserInput } from "./user.input";

@Resolver(of => UserType)
export class UserResolver{
    constructor(
        private userService: UserService
    ) {}

    @Query(returns => [UserType])
    getAllUsers(){
        return this.userService.getAllUsers()
    }

    @Query(returns => UserType)
    getUserById(
        @Args('id') id: string
    ){
        return this.userService.getUserById(id)
    }

    @Mutation(returns => UserType)
    createUser(
        @Args('createUserInput') createUserInput: CreateUserInput
    ) {
        return this.userService.createUser(createUserInput)
    }
}