import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { UserType } from "./user.type";
import { UserService } from "./user.service";
import { UserInput } from "./user.input";

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
        @Args('userInput') userInput: UserInput
    ) {
        return this.userService.createUser(userInput)
    }

    @Mutation(returns => UserType)
    updateUser(
        @Args('id') id: string,
        @Args('userInput') userInput: UserInput
    ){
        return this.userService.updateUser(id, userInput)
    }

    @Mutation(returns => UserType)
    deleteUser(
        @Args('id') id: string
    ){
        return this.userService.deleteUser(id)
    }
}