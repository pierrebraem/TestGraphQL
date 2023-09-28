import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm'; 
import { v4 as uuid } from 'uuid';
import { UserInput } from './user.input';

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

    async createUser(userInput: UserInput): Promise<User>{
        const { firstname, lastname, email, username, age, password } = userInput
        
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

    async updateUser(id: string, userInput: UserInput): Promise<User>{
        const { firstname, lastname, email, username, age, password } = userInput

        const user = this.userRepository.create({
            id: id,
            firstname,
            lastname,
            email,
            username,
            age,
            password
        })

        this.userRepository.update({ id: id }, user)
        return user;
    }

    async deleteUser(id: string): Promise<User>{
        const user = this.getUserById(id)
        this.userRepository.delete({ id: id })
        return user
    }
}
