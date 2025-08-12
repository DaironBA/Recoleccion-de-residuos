import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TranslationsFilesEnum } from 'src/common/enums/translations-files.enum';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService extends AbstractService<User, CreateUserDto, UpdateUserDto> {

  constructor(
    @InjectRepository(User) protected repository: Repository<User>
  ) {
    super(repository);
  }

  async create(createUserDto: CreateUserDto) {
    await this.validateInsertUser(createUserDto.email, createUserDto.documentNumber);
    createUserDto.password = await bcryptjs.hash(createUserDto.password, 10);
    return super.create(createUserDto);
  }
  
  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    const email: string|undefined = updateUserDto.email;
    const documentNumber: number|undefined = updateUserDto.documentNumber;
    await this.validateInsertUser(email, documentNumber, id);

    return super.update(id, updateUserDto);
  }

  async validateInsertUser(email?: string, documentNumber?: number, id?: number) {
    if (email) {
      await this.validateDuplicatedField('email', email, id, TranslationsFilesEnum.USER_FIELDS);
    }
    if (documentNumber) {
      await this.validateDuplicatedField('documentNumber', documentNumber, id, TranslationsFilesEnum.USER_FIELDS);
    }
    return;
  }
  
}
