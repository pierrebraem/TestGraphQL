import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreatePostInput } from './post.input';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>
    ){}

    async getAllPosts(): Promise<Post[]>{
        return this.postRepository.find()
    }

    async getPostById(id: string): Promise<Post>{
        return this.postRepository.findOneBy({ id: id })
    }

    async createPost(createPostInput: CreatePostInput): Promise<Post>{
        const { content, url_image, user } = createPostInput

        const post = this.postRepository.create({
            id: uuid(),
            content,
            url_image,
            user
        })

        return this.postRepository.save(post)
    }
}
