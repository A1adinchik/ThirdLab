import {HttpStatus, Injectable} from "@nestjs/common";
import {DatasourceService} from "../datasource/datasource.service";
import {Route} from "../routes/routes.entity";
import {Repository, ReturningStatementNotSupportedError} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from '../users/users.entity'
import { CreateUserDto } from './dto/UserDTO';
import { IncompleteUserDto } from './dto/IncompleteUserDto'

@Injectable()
export class UsersService
{
    constructor(@InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

    async create(userDto: CreateUserDto): Promise<User>
    {
        const user = this.userRepository.create();
        user.fullName = userDto.fullName;
        user.age = userDto.age;
        user.gender = userDto.gender;
        await this.userRepository.save(user);
        return user;
    }
    
    async findOne(id:number)
    {
        return this.userRepository.findOne({
            where: {id},
        })
    }

    async findAll() : Promise<User[]>
    {
        const user = await this.userRepository.find({

        })
        return user;
    }

    async update(id: number, updateUser: User)
    {
        const user = await this.userRepository.findOne({where:{id}});
        user.fullName = updateUser.fullName;
        user.age = updateUser.age;
        user.gender = updateUser.gender;
        await this.userRepository.save(user);
        return user;
    }
    
    async remove(id: number)
    {
        this.userRepository.delete({id});
    }

    async findIncomplete(): Promise<IncompleteUserDto[]> {
        const users = await this.userRepository.find();
        const incompleteUser : IncompleteUserDto[] = users.map((user) => {
            const incompleteUser = new IncompleteUserDto();
            incompleteUser.fullName = user.fullName;
            return incompleteUser;
        });
        return incompleteUser;
    }
}
