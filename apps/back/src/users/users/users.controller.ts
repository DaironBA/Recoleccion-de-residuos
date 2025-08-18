import { Controller, Put, Param, Body, ParseIntPipe } from '@nestjs/common';
import { AbstractController } from 'src/common/abstract/abstract.controller';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController extends AbstractController<User, CreateUserDto, UpdateUserDto> {
  constructor(protected readonly usersService: UsersService) {
    super(usersService);
  }
}

