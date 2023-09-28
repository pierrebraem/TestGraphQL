import { Resolver, Args, Query, Mutation, ResolveField, Parent } from "@nestjs/graphql";
import { PostType } from './post.type'
import { PostService } from "./post.service";
import { CreatePostInput } from "./post.input";
import { Post } from "./post.entity";
import { UserService } from "../user/user.service";

@Resolver(of => PostType)
export class PostResolver{
    constructor(
        private postService: PostService,
        private userService: UserService
    ) {}

    @Query(returns => [PostType])
    getAllPosts(){
        return this.postService.getAllPosts()
    }

    @Query(returns => [PostType])
    getAllPostsByUser(
        @Args('user') user: string
    ){
        return this.postService.getAllPostsByUser(user);
    }

    @Query(returns => PostType)
    getPostById(
        @Args('id') id: string
    ){
        return this.postService.getPostById(id)
    }

    @Mutation(returns => PostType)
    createPost(
        @Args('createPostInput') createPostInput: CreatePostInput
    ){
        return this.postService.createPost(createPostInput)
    }

    @ResolveField()
    async user(@Parent() post: Post){
        return this.userService.getUserById(post.user)
    }
}