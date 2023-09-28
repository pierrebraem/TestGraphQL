import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PostInput } from './post.input';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>
    ){}

    async getAllPosts(): Promise<Post[]>{
        return this.postRepository.find()
    }

    async getAllPostsByUser(user: string): Promise<Post[]>{
        return this.postRepository.find({
            where:{
                user: user
            }
        })
    }

    async getPostById(id: string): Promise<Post>{
        return this.postRepository.findOneBy({ id: id })
    }

    async createPost(postInput: PostInput): Promise<Post>{
        const { content, url_image, user } = postInput

        const post = this.postRepository.create({
            id: uuid(),
            content,
            url_image,
            user
        })

        return this.postRepository.save(post)
    }

    async updatePost(id: string, postInput: PostInput): Promise<Post>{
        const { content, url_image, user } = postInput

        const post = this.postRepository.create({
            id,
            content,
            url_image,
            user
        })

        this.postRepository.update({id: id}, post)
        return post
    }

    async deletePost(id: string): Promise<Post>{
        const post = this.getPostById(id)
        this.postRepository.delete({ id: id })
        return post
    }

    async deletePostsByUser(user: string): Promise<Post[]>{
        const posts = this.getAllPostsByUser(user)
        this.postRepository.delete({ user: user })
        return posts;
    }
}
