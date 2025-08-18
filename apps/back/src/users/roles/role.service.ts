import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/abstract/abstract.service';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService extends AbstractService<Role> {

  constructor(
    @InjectRepository(Role) protected repository: Repository<Role>
  ) {
    super(repository);
  }
  
}


