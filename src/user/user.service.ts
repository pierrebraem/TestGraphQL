import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm'; 
import { v4 as uuid } from 'uuid';
import { CreateUserInput } from './user.input';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>
    ) {}

    async getAllUsers(): Promise <User[]>{
        return this.userRepository.find();
    }

    async getUserById(id: string): Promise<User>{
        return this.userRepository.findOneBy({ id: id });
    }

    async createUser(createUserInput: CreateUserInput): Promise<User>{
        const { firstname, lastname, email, username, age, password} = createUserInput
        
        const user = this.userRepository.create({
            id: uuid(),
            firstname,
            lastname,
            email,
            username,
            age,
            password
        })

        return this.userRepository.save(user);
    }
}
