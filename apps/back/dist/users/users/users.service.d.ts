import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
export declare class UsersService extends AbstractService<User, CreateUserDto, UpdateUserDto> {
    protected repository: Repository<User>;
    constructor(repository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    validateInsertUser(email?: string, documentNumber?: number, id?: number): Promise<void>;
}
