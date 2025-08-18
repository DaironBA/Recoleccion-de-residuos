import { Controller } from '@nestjs/common';
import { AbstractController } from 'src/common/abstract/abstract.controller';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';


@Controller('roles')
export class RoleController extends AbstractController<Role> {
  constructor(protected readonly service: RoleService) {
    super(service);
  }
}
