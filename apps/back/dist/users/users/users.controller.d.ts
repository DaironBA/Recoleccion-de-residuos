import { AbstractController } from 'src/common/abstract/abstract.controller';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController extends AbstractController<User, CreateUserDto, UpdateUserDto> {
    protected readonly service: UsersService;
    constructor(service: UsersService);
}
